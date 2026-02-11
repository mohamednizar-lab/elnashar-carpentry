import { useTranslation } from 'react-i18next'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { PHONE_NUMBER, PHONE_TEL, WHATSAPP_URL } from '../constants/links'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-walnut text-center mb-16">
          {t('contact.title')}
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={PHONE_TEL}
            className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-wood-100 hover:bg-wood-200 transition-all duration-200 w-full sm:w-auto justify-center sm:justify-start shadow-md hover:shadow-lg min-w-0"
            aria-label={t('contact.call')}
          >
            <div className="w-12 h-12 rounded-full bg-walnut/20 flex items-center justify-center shrink-0">
              <FaPhoneAlt className="w-5 h-5 text-walnut" aria-hidden />
            </div>
            <div className="text-start min-w-0">
              <p className="text-sm text-wood-600">{t('contact.callNow')}</p>
              <p className="font-bold text-walnut truncate">{PHONE_NUMBER}</p>
            </div>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-[#25D366] hover:opacity-90 text-white transition-all duration-200 w-full sm:w-auto justify-center sm:justify-start shadow-md hover:shadow-lg min-w-0"
            aria-label={t('contact.whatsapp')}
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <FaWhatsapp className="w-6 h-6" aria-hidden />
            </div>
            <div className="text-start min-w-0">
              <p className="text-sm text-white/90">{t('contact.whatsappDesc')}</p>
              <p className="font-bold">{t('contact.fastReply')}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
