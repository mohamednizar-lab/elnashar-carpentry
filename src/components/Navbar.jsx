import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { getTranslations } from '../i18n'
import { trackConversion } from '../utils/trackConversion'
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

  const handleWhatsApp = () => trackConversion(WHATSAPP)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo + Name */}
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


          {/* ===== Desktop Menu ===== */}
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

            {/* ✅ WhatsApp tracked */}
            <button
              type="button"
              onClick={handleWhatsApp}
              className="px-4 py-2 rounded-lg bg-[#25D366] text-white font-medium hover:opacity-90 transition-opacity"
            >
              {t.hero.contactUs}
            </button>
          </div>


          {/* ===== Mobile ===== */}
          <div className="flex md:hidden items-center gap-3">

            <button
              onClick={toggleLang}
              className="p-2 rounded-lg bg-wood-100 text-walnut font-medium"
            >
              {lang === 'ar' ? 'EN' : 'ع'}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg text-walnut hover:bg-wood-100"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>


        {/* ===== Mobile Menu ===== */}
        {open && (
          <div className="md:hidden py-4 border-t border-wood-200 animate-fade-in">
            <div className="flex flex-col gap-4">
              <NavLink href="#hero" onClick={() => setOpen(false)}>{t.nav.home}</NavLink>
              <NavLink href="#about" onClick={() => setOpen(false)}>{t.nav.about}</NavLink>
              <NavLink href="#services" onClick={() => setOpen(false)}>{t.nav.services}</NavLink>
              <NavLink href="#gallery" onClick={() => setOpen(false)}>{t.nav.gallery}</NavLink>
              <NavLink href="#contact" onClick={() => setOpen(false)}>{t.nav.contact}</NavLink>

              {/* ✅ WhatsApp tracked */}
              <button
                type="button"
                onClick={handleWhatsApp}
                className="px-4 py-2 rounded-lg bg-[#25D366] text-white font-medium text-center"
              >
                {t.hero.contactUs}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
