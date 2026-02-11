import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const KEYWORDS =
  'نجار, نجارة, الشارقة, دبي, عجمان, مطابخ, أثاث, صيانة, carpentry, furniture, sharjah, dubai'

export default function SEO() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const titles = {
      ar: 'الإتقان لأعمال النجارة | نجار الشارقة ودبي وعجمان',
      en: 'Al Itqan Carpentry Works | Sharjah Dubai Ajman',
    }
    const descriptions = {
      ar: 'الإتقان لأعمال النجارة - أفضل خدمات النجارة في الشارقة ودبي وعجمان. تفصيل أثاث، مطابخ، غرف نوم، صيانة وإصلاح. اتصل الآن +971505001597',
      en: 'Al Itqan Carpentry Works - Best carpentry services in Sharjah, Dubai, Ajman. Custom furniture, kitchens, bedrooms, maintenance. Call +971505001597',
    }
    const lng = i18n.language || 'ar'
    document.title = titles[lng] || titles.ar
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', descriptions[lng] || descriptions.ar)
    const keywordsEl = document.querySelector('meta[name="keywords"]')
    if (keywordsEl) keywordsEl.setAttribute('content', KEYWORDS)
  }, [i18n.language])

  return null
}
