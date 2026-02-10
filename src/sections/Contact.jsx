import { useLang } from '../context/LanguageContext'
import { getTranslations } from '../i18n'
import { trackConversion } from '../utils/trackConversion'

const PHONE = '+971505001597'
const WHATSAPP = 'https://wa.me/971505001597'

export default function Contact() {
  const { lang } = useLang()
  const t = getTranslations(lang)

  const handleCall = () => trackConversion(`tel:${PHONE}`)
  const handleWhatsApp = () => trackConversion(WHATSAPP)

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl md:text-4xl font-bold text-walnut text-center mb-16">
          {t.contact.title}
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

          {/* Call */}
          <button
            type="button"
            aria-label="Call us"
            onClick={handleCall}
            className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-wood-100 hover:bg-wood-200 transition-colors w-full sm:w-auto justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-walnut/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-walnut" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>

            <div className="text-start">
              <p className="text-wood-600 text-sm">{t.contact.phone}</p>
              <p className="font-semibold text-walnut">{PHONE}</p>
            </div>
          </button>


          {/* WhatsApp */}
          <button
            type="button"
            aria-label="WhatsApp"
            onClick={handleWhatsApp}
            className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-[#25D366] hover:opacity-90 text-white transition-opacity w-full sm:w-auto justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207z"/>
              </svg>
            </div>

            <div className="text-start">
              <p className="text-white/90 text-sm">{t.contact.whatsapp}</p>
              <p className="font-semibold">{t.contact.call}</p>
            </div>
          </button>

        </div>
      </div>
    </section>
  )
}
