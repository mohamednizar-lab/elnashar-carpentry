import { useTranslation } from 'react-i18next'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_URL } from '../constants/links'
import s1 from '../assets/images/services/service-1.jpg'
import s2 from '../assets/images/services/service-2.jpg'
import s3 from '../assets/images/services/service-3.jpg'
import s4 from '../assets/images/services/service-4.jpg'
import s5 from '../assets/images/services/service-5.jpg'
import s6 from '../assets/images/services/service-6.jpg'
import s7 from '../assets/images/services/service-7.jpg'
import s8 from '../assets/images/services/service-8.jpg'
import s9 from '../assets/images/services/service-9.jpg'
import s10 from '../assets/images/services/service-10.jpg'

const SERVICE_IMAGES = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]

export default function Services() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true }) || []

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-walnut text-center mb-16">
          {t('services.title')}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-wood-50 border border-wood-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={SERVICE_IMAGES[i % SERVICE_IMAGES.length]}
                  alt={item}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-walnut mb-1">{item}</h3>
                <p className="text-sm text-wood-600">{t('services.cardDesc')}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-wood-600 mt-12 text-lg">
          {t('services.cta')}
        </p>
        <div className="flex justify-center mt-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            <FaWhatsapp className="w-5 h-5 shrink-0" aria-hidden />
            {t('hero.contactUs')}
          </a>
        </div>
      </div>
    </section>
  )
}
