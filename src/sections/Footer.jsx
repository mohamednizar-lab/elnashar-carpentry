import { useTranslation } from 'react-i18next'
import { DEVELOPER_WHATSAPP } from '../constants/links'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="py-12 bg-walnut text-wood-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg font-medium mb-6">{t('footer.areas')}</p>
        <p className="text-wood-200 text-sm">
          {t('footer.developer')}{' '}
          <a
            href={DEVELOPER_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline font-medium"
          >
            {t('footer.developerName')}
          </a>
        </p>
      </div>
    </footer>
  )
}
