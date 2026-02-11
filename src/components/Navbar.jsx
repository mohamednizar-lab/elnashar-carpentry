import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { useActiveSection } from '../hooks/useActiveSection'
import { WHATSAPP_URL } from '../constants/links'
import logo from '../assets/images/logo.png'

const SECTION_IDS = ['hero', 'about', 'services', 'gallery', 'contact']

function NavLink({ sectionId, children, onClick, isActive }) {
  const scrollTo = (e) => {
    e.preventDefault()
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    onClick?.()
  }

  return (
    <a
      href={`#${sectionId}`}
      onClick={scrollTo}
      className={`font-medium transition-colors duration-200 block py-2 md:py-0 ${
        isActive ? 'text-walnut font-semibold' : 'text-wood-700 hover:text-walnut'
      }`}
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const activeId = useActiveSection()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#hero"
            className="flex items-center gap-3 shrink-0"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
              setMenuOpen(false)
            }}
          >
            <img
              src={logo}
              alt={t('hero.title')}
              className="h-10 md:h-12 w-auto object-contain"
            />
            <span className="text-lg md:text-xl font-bold text-walnut">
              {t('hero.title')}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {SECTION_IDS.map((id) => (
              <NavLink
                key={id}
                sectionId={id}
                isActive={activeId === id}
              >
                {t(`nav.${id === 'hero' ? 'home' : id}`)}
              </NavLink>
            ))}

            <button
              type="button"
              onClick={() => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
              className="px-3 py-1.5 rounded-lg bg-wood-100 text-walnut font-medium hover:bg-wood-200 transition-colors shrink-0"
              aria-label={i18n.language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              {i18n.language === 'ar' ? 'EN' : 'ع'}
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-white font-medium hover:opacity-90 transition-opacity shrink-0"
            >
              <FaWhatsapp className="w-5 h-5 shrink-0" aria-hidden />
              <span>{t('hero.contactUs')}</span>
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
              className="p-2 rounded-lg bg-wood-100 text-walnut font-medium"
              aria-label={i18n.language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              {i18n.language === 'ar' ? 'EN' : 'ع'}
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#25D366] text-white"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-walnut hover:bg-wood-100 transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="md:hidden py-4 border-t border-wood-200 animate-fade-in"
            role="navigation"
            aria-label="Mobile menu"
          >
            <div className="flex flex-col gap-1">
              {SECTION_IDS.map((id) => (
                <NavLink
                  key={id}
                  sectionId={id}
                  onClick={() => setMenuOpen(false)}
                  isActive={activeId === id}
                >
                  {t(`nav.${id === 'hero' ? 'home' : id}`)}
                </NavLink>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#25D366] text-white font-medium mt-2"
              >
                <FaWhatsapp className="w-5 h-5 shrink-0" />
                {t('hero.contactUs')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
