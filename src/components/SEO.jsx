import { useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

const TITLES = {
  ar: 'السيد النشار لأعمال النجارة | نجار الشارقة ودبي وعجمان',
  en: 'El Sayed El Nashar Carpentry Works | Sharjah Dubai Ajman',
}

const DESCRIPTIONS = {
  ar: 'السيد النشار لأعمال النجارة - أفضل خدمات النجارة في الشارقة ودبي وعجمان. تفصيل أثاث، مطابخ، غرف نوم، صيانة وإصلاح. اتصل الآن +971505001597',
  en: 'El Sayed El Nashar Carpentry Works - Best carpentry services in Sharjah, Dubai, Ajman. Custom furniture, kitchens, bedrooms, maintenance. Call +971505001597',
}

const KEYWORDS = 'نجار, نجارة, الشارقة, دبي, عجمان, مطابخ, أثاث, صيانة, carpentry, furniture, sharjah, dubai'

export default function SEO() {
  const { lang } = useLang()

  useEffect(() => {
    document.title = TITLES[lang] || TITLES.ar
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', DESCRIPTIONS[lang] || DESCRIPTIONS.ar)
    const keywords = document.querySelector('meta[name="keywords"]')
    if (keywords) keywords.setAttribute('content', KEYWORDS)
  }, [lang])

  return null
}
