import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { getTranslations } from '../i18n'
import logo from '../assets/images/logo.png'

const WHATSAPP = 'https://wa.me/971505001597'

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    className="text-wood-700 hover:text-walnut transition-colors duration-200 font-medium block"
    onClick={(e) => {
      e.preventDefault()
      document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
      onClick?.()
    }}
  >
    {children}
  </a>
)

export default function Navbar() {
  const { lang, toggleLang } = useLang()
  const t = getTranslations(lang)
  const [open, setOpen] = useState(false)

  const handleWhatsApp = () => window.open(WHATSAPP, '_blank')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 md:h-20">

          <a
            href="#hero"
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <img
              src={logo}
              alt="Al Itqan Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />

            <span className="text-lg md:text-xl font-bold text-walnut">
              {t.hero.title}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#hero">{t.nav.home}</NavLink>
            <NavLink href="#about">{t.nav.about}</NavLink>
            <NavLink href="#services">{t.nav.services}</NavLink>
            <NavLink href="#gallery">{t.nav.gallery}</NavLink>
            <NavLink href="#contact">{t.nav.contact}</NavLink>

            <button
              onClick={toggleLang}
              className="px-3 py-1.5 rounded-lg bg-wood-100 text-walnut font-medium hover:bg-wood-200 transition-colors"
            >
              {lang === 'ar' ? 'EN' : 'ع'}
            </button>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="px-4 py-2 rounded-lg bg-[#25D366] text-white font-medium hover:opacity-90 transition-opacity"
            >
              {t.hero.contactUs}
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}
