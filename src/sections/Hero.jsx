import { useLang } from '../context/LanguageContext'
import { getTranslations } from '../i18n'
import heroImg from '../assets/images/hero.jpg'
import { trackConversion } from '../utils/trackConversion'

const WHATSAPP = 'https://wa.me/971505001597'

export default function Hero() {
  const { lang } = useLang()
  const t = getTranslations(lang)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-walnut/75" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            {t.hero.title}
          </h1>

          <p
            className="text-lg md:text-xl text-wood-100 mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.15s', animationFillMode: 'forwards', opacity: 0 }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards', opacity: 0 }}
          >

            {/* WhatsApp (Conversion tracked) */}
            <button
              type="button"
              aria-label="WhatsApp"
              onClick={() => trackConversion(WHATSAPP)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:opacity-90 transition-opacity shadow-card"
            >
              <span>{t.hero.contactUs}</span>
            </button>

            {/* Scroll only */}
            <button
              type="button"
              onClick={() => scrollTo('services')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/20 backdrop-blur text-white font-semibold hover:bg-white/30 transition-colors border border-white/30"
            >
              {t.hero.ourServices}
            </button>

          </div>

        </div>
      </div>
    </section>
  )
}
