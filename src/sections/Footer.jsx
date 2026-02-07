import { useLang } from '../context/LanguageContext'
import { getTranslations } from '../i18n'

// WhatsApp direct only (no message)
const DEVELOPER_LINK = 'https://wa.me/201029022621'

export default function Footer() {
  const { lang } = useLang()
  const t = getTranslations(lang)

  return (
    <footer className="py-12 bg-walnut text-wood-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <p className="text-lg font-medium mb-6">
          {t.footer.areas}
        </p>

        {/* Full clickable developer credit */}
        <a
          href={DEVELOPER_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-wood-200 text-sm hover:text-white hover:underline transition-colors duration-200"
        >
          {t.footer.developer} {t.footer.developerName}
        </a>

      </div>
    </footer>
  )
}
