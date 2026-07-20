import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Kullanım Koşulları — Büyüyo',
  description: 'Büyüyo kullanım koşulları — abonelik, iptal ve sorumluluk şartları.',
};

export default function KullanimKosullari() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="font-heading font-800 text-4xl text-white mb-3">Kullanım Koşulları</h1>
        <p className="font-body text-sm text-white/40 mb-12">Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>

        <div className="space-y-10 font-body text-white/70 leading-relaxed">
          <section>
            <h2 className="font-heading font-700 text-xl text-white mb-3">1. Hizmetin Kapsamı</h2>
            <p>
              Büyüyo, bebek gelişimi konusunda bilgilendirici içerik, takip araçları ve yapay zeka
              destekli öneriler sunan bir mobil uygulamadır.
              <strong className="text-white"> Tıbbi tavsiye yerine geçmez.</strong> Sağlıkla ilgili
              endişelerinizde her zaman bir hekime danışın.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-xl text-white mb-3">2. Abonelik ve Ücretlendirme</h2>
            <p>
              Premium abonelik Aylık veya Yıllık planlarla sunulur. Abonelik, iptal etmediğiniz
              sürece dönem sonunda otomatik olarak yenilenir. İptal işlemini uygulama içindeki
              Abonelik Yönetimi ekranından, mevcut dönem bitmeden yapabilirsiniz. İptal edilen
              abonelik, ödemesi yapılmış dönemin sonuna kadar aktif kalır.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-xl text-white mb-3">3. Elmas Sistemi</h2>
            <p>
              Uygulama içi "elmas" sanal bir ödül/para birimidir, uygulama içi etkinliklerle
              kazanılır ve yalnızca uygulama içi özellikler için harcanabilir. Elmasların nakit
              karşılığı yoktur ve gerçek paraya çevrilemez.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-xl text-white mb-3">4. Kullanıcı Sorumlulukları</h2>
            <p>
              Uygulamaya girdiğiniz bilgilerin doğruluğundan siz sorumlusunuz. Uygulamayı yasa dışı
              amaçlarla veya başkalarının haklarını ihlal edecek şekilde kullanmamayı kabul edersiniz.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-xl text-white mb-3">5. Sorumluluk Sınırı</h2>
            <p>
              Büyüyo içeriği genel bilgilendirme amaçlıdır; yapay zeka tarafından üretilen öneriler
              hatalı veya eksik olabilir. Uygulamanın kullanımından doğabilecek zararlardan
              yasaların izin verdiği azami ölçüde sorumlu tutulamayız.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-xl text-white mb-3">6. Değişiklikler</h2>
            <p>
              Bu koşulları zaman zaman güncelleyebiliriz. Önemli değişikliklerde uygulama içinde
              bilgilendirme yapılır.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-700 text-xl text-white mb-3">7. İletişim</h2>
            <p>
              Sorularınız için: <span className="text-primary-light">info@buyuyo.app</span>
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
