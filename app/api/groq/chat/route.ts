// Mobil uygulamanın Groq API'ye erişimi için server-side proxy.
// API key burada kalır, client'a hiç gönderilmez.
import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_MODELS = new Set(['llama-3.3-70b-versatile', 'llama-3.1-8b-instant']);
const MAX_TOKENS_CAP = 3000;

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Geçersiz istek gövdesi' }, { status: 400 });
  }

  const { messages, model, temperature, max_tokens, top_p, response_format } = body ?? {};

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: 'messages gerekli' }, { status: 400 });
  }
  if (!ALLOWED_MODELS.has(model)) {
    return NextResponse.json({ error: 'Desteklenmeyen model' }, { status: 400 });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Sunucu yapılandırma hatası' }, { status: 500 });
  }

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: typeof temperature === 'number' ? temperature : 0.7,
        max_tokens: Math.min(typeof max_tokens === 'number' ? max_tokens : 500, MAX_TOKENS_CAP),
        top_p: typeof top_p === 'number' ? top_p : undefined,
        response_format: response_format === 'json_object' ? { type: 'json_object' } : undefined,
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error('Groq API hatası:', errText);
      return NextResponse.json({ error: 'AI isteği başarısız oldu' }, { status: 502 });
    }

    const data = await groqRes.json();
    const content = data.choices?.[0]?.message?.content ?? '';
    return NextResponse.json({ content });
  } catch (e) {
    console.error('Groq proxy hatası:', e);
    return NextResponse.json({ error: 'AI isteği başarısız oldu' }, { status: 502 });
  }
}
