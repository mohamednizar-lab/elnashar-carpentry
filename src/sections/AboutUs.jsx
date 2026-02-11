import { useTranslation } from 'react-i18next'
import aboutImg from '../assets/images/hero.jpg'

export default function AboutUs() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-20 md:py-28 bg-wood-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-walnut mb-6">
              {t('about.title')}
            </h2>
            <p className="text-wood-700 leading-relaxed text-lg text-start">
              {t('about.content')}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
              <img
                src={aboutImg}
                alt={t('about.title')}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
