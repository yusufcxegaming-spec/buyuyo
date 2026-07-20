import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası — Büyüyo',
  description: 'Büyüyo gizlilik politikası — hangi verileri topluyoruz, nasıl kullanıyoruz.',
};

export default function GizlilikPolitikasi() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="font-heading font-800 text-4xl text-white mb-3">Gizlilik Politikası</h1>
        <p className="font-body text-sm text-white/40 mb-12">Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>

        <div className="space-y-10 font-body text-white/70 leading-relaxed">
          <section>
            <h2 className="font-heading font-700 text-xl text-white mb-3">1. Topladığımız Veriler</h2>
            <p>
              Büyüyo uygulamasını kullanırken aşağıdaki bilgileri sağlayabilirsiniz: bebeğinizin adı,
              doğum tarihi, kilo/boy ölçümleri ve isteğe bağlı olarak bir fotoğraf. Bu bilgiler
              <strong className="text-white"> yalnızca cihazınızda</strong> saklanır — bir sunucuya
              kaydedilmez. Uygulamayı silmeniz bu verileri de siler.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-xl text-white mb-3">2. Yapay Zeka Özellikleri</h2>
            <p>
              AI Koç, beslenme önerileri, psikoloji ders soruları ve ninni üretimi gibi özellikler
              üçüncü taraf yapay zeka sağlayıcılarına (Groq, ElevenLabs) yazdığınız metinleri ve
              bağlam olarak bebeğinizin yaşını/adını iletir. Bu istekler sunucularımız üzerinden
              vekil (proxy) olarak geçer; API anahtarlarımız asla cihazınıza gönderilmez. Sağlayıcılar
              bu istekleri kendi gizlilik politikalarına göre işler, kalıcı olarak saklamayız.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-xl text-white mb-3">3. Abonelik ve Ödeme</h2>
            <p>
              Premium abonelik satın aldığınızda ödeme bilgileriniz Büyüyo sunucularında saklanmaz;
              ödeme sağlayıcımız tarafından işlenir. Abonelik durumu (aktif/iptal) cihazınızda ve
              gerekli görülürse ödeme sağlayıcısının sistemlerinde tutulur.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-xl text-white mb-3">4. Çocukların Gizliliği</h2>
            <p>
              Büyüyo, ebeveynler tarafından çocukları hakkında bilgi girmek üzere tasarlanmıştır;
              uygulama doğrudan çocuklar tarafından kullanılmak üzere değildir. Bebeğinize ait
              bilgiler yalnızca sizin cihazınızda tutulur ve sizin kontrolünüzdedir.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-xl text-white mb-3">5. Verilerinizi Silme</h2>
            <p>
              Tüm veriler cihazınızda tutulduğundan, uygulama ayarlarından veya uygulamayı
              cihazınızdan kaldırarak tüm verilerinizi tamamen silebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-xl text-white mb-3">6. İletişim</h2>
            <p>
              Gizlilikle ilgili sorularınız için: <span className="text-primary-light">info@buyuyo.app</span>
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
