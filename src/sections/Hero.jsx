import { useTranslation } from 'react-i18next'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_URL } from '../constants/links'
import heroImg from '../assets/images/hero.jpg'

export default function Hero() {
  const { t } = useTranslation()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-walnut/75" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-wood-100 mb-10">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:opacity-90 transition-opacity shadow-card"
            >
              <FaWhatsapp className="w-5 h-5 shrink-0" aria-hidden />
              <span>{t('hero.contactUs')}</span>
            </a>
            <button
              type="button"
              onClick={() => scrollTo('services')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/20 backdrop-blur text-white font-semibold hover:bg-white/30 transition-colors border border-white/30"
            >
              {t('hero.ourServices')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
