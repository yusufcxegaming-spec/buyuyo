// Mobil uygulamanın ElevenLabs Music API'ye erişimi için server-side proxy.
// API key burada kalır, client'a hiç gönderilmez.
import { NextRequest, NextResponse } from 'next/server';

const MAX_LENGTH_MS = 120000;

// Müzik üretimi 30-60 saniye sürebiliyor — varsayılan fonksiyon süresini aşmamak için uzatıldı.
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Geçersiz istek gövdesi' }, { status: 400 });
  }

  const { prompt, musicLengthMs } = body ?? {};
  if (typeof prompt !== 'string' || !prompt.trim()) {
    return NextResponse.json({ error: 'prompt gerekli' }, { status: 400 });
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Sunucu yapılandırma hatası' }, { status: 500 });
  }

  const length = Math.min(typeof musicLengthMs === 'number' ? musicLengthMs : 90000, MAX_LENGTH_MS);

  try {
    const res = await fetch('https://api.elevenlabs.io/v1/music/compose', {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
        Accept: 'audio/mpeg',
      },
      body: JSON.stringify({ prompt, music_length_ms: length }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('ElevenLabs API hatası:', errText);
      return NextResponse.json({ error: 'Müzik üretimi başarısız oldu' }, { status: 502 });
    }

    const arrayBuffer = await res.arrayBuffer();
    const audio = Buffer.from(arrayBuffer).toString('base64');
    return NextResponse.json({ audio });
  } catch (e) {
    console.error('ElevenLabs proxy hatası:', e);
    return NextResponse.json({ error: 'Müzik üretimi başarısız oldu' }, { status: 502 });
  }
}
