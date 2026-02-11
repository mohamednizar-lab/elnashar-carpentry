# Refactor Summary

## 1. Language support (i18n)

- **react-i18next** is used for translations. Configuration lives in `src/i18n/config.js`.
- **RTL**: On language change, `document.documentElement.dir` and `document.documentElement.lang` are set (`rtl` for Arabic, `ltr` for English). `html` and `body` get a `.rtl` class when Arabic is active.
- **Persistence**: Selected language is stored in `localStorage` under `carpentry-lang`.
- **Translations**: All UI strings are in `src/i18n/ar.json` and `src/i18n/en.json`. New keys: `services.cardDesc`, `contact.callNow`, `contact.whatsappDesc`, `contact.fastReply`, and `gallery.img1`–`img8` for gallery image alts.
- **Language toggle**: In the top navbar (desktop and mobile). Label “EN” in Arabic mode and “ع” in English.

## 2. Navigation

- **Smooth scroll**: All nav links use `scrollIntoView({ behavior: 'smooth' })` for in-page sections.
- **Active section**: `src/hooks/useActiveSection.js` uses `IntersectionObserver` to set the active section. Nav links get an active state (e.g. `text-walnut font-semibold`).
- **Responsive navbar**: 
  - Desktop: horizontal links, language toggle, WhatsApp button.
  - Mobile: hamburger (react-icons: `HiMenu` / `HiX`). Opening it shows the same links and a WhatsApp button; tapping a link closes the menu.

## 3. Icons

- **Library**: **react-icons** (no inline SVGs for these).
- **Usage**:
  - **Navbar**: `HiMenu`, `HiX` (mobile menu), `FaWhatsapp` (Contact Us).
  - **Hero**: `FaWhatsapp` on the main CTA.
  - **Services**: `FaWhatsapp` on the CTA under the list.
  - **Contact**: `FaPhoneAlt`, `FaWhatsapp` on the two contact cards.
  - **FloatingButtons**: `FaWhatsapp`, `FaPhoneAlt`.
- Icons use consistent sizes (`w-5 h-5` or `w-6 h-6`, `w-7 h-7` for WhatsApp float) and `shrink-0` where needed so they don’t collapse with text.

## 4. UI

- **Spacing**: `gap-2.5` / `gap-4` for icon+text; padding and section spacing unchanged.
- **Responsiveness**: Navbar, Contact cards, and floating buttons remain responsive; floating buttons are in a column on the right with `dir="ltr"` so position is consistent in both RTL and LTR.
- **RTL**: `index.css` has `[dir='rtl']` and `[dir='ltr']` for base text alignment; About paragraph uses `text-start` so it follows direction.
- **Buttons**: Contact and Hero CTAs use `inline-flex items-center gap-2.5` so icon and label are aligned.

## 5. Code quality

- **Centralized links**: `src/constants/links.js` holds `WHATSAPP_URL`, `PHONE_NUMBER`, `PHONE_TEL`, `DEVELOPER_WHATSAPP`. No duplicate URLs/phones across components.
- **No duplicate logic**: Scroll-to-section and WhatsApp/call actions use the same constants and same patterns (e.g. `<a href={WHATSAPP_URL}>` or `href={PHONE_TEL}`).
- **Removed**: `LanguageContext.jsx`, `useLanguage.js`; all language state and direction come from react-i18next and `src/i18n/config.js`.
- **i18n**: All components that need text use `useTranslation()` and `t('key')`; no `getTranslations(lang)` or context for language.

---

## Files modified

| File | Changes |
|------|--------|
| `package.json` | Added `i18next`, `react-i18next`, `react-icons`. |
| `src/main.jsx` | Import `./i18n/config` so i18n (and RTL) init on load. |
| `src/App.jsx` | Removed `LanguageProvider`; kept `SEO` and `MainLayout`. |
| `src/i18n/config.js` | **New.** i18next init, RTL/dir and `localStorage` on language change. |
| `src/i18n/ar.json` | Formatted; added `services.cardDesc`, `contact.callNow/whatsappDesc/fastReply`, `gallery.img1`–`img8`. |
| `src/i18n/en.json` | Same structure and new keys as `ar.json`. |
| `src/constants/links.js` | **New.** WHATSAPP_URL, PHONE_NUMBER, PHONE_TEL, DEVELOPER_WHATSAPP. |
| `src/hooks/useActiveSection.js` | **New.** IntersectionObserver-based active section for nav. |
| `src/components/Navbar.jsx` | Rewritten: `useTranslation`, `useActiveSection`, hamburger (HiMenu/HiX), FaWhatsapp, mobile menu, active link style. |
| `src/components/FloatingButtons.jsx` | Uses `links.js`, FaWhatsapp, FaPhoneAlt; container with `dir="ltr"` and `right-5` for position. |
| `src/components/SEO.jsx` | Uses `useTranslation()` for `i18n.language`; updates document title and meta description/keywords on language change. |
| `src/sections/Hero.jsx` | `useTranslation()`, `WHATSAPP_URL`, FaWhatsapp on CTA. |
| `src/sections/AboutUs.jsx` | `useTranslation()`; paragraph `text-start`. |
| `src/sections/Services.jsx` | `useTranslation()`, `t('services.cardDesc')`, `WHATSAPP_URL`, FaWhatsapp on CTA. |
| `src/sections/Gallery.jsx` | `useTranslation()`; gallery image alts from `t('gallery.img1')` etc. |
| `src/sections/Contact.jsx` | `useTranslation()`, `links.js`, FaPhoneAlt and FaWhatsapp; all labels translatable. |
| `src/sections/Footer.jsx` | `useTranslation()`, `DEVELOPER_WHATSAPP` from `links.js`. |
| `src/index.css` | RTL/LTR base styles for `[dir='rtl']` and `[dir='ltr']`, and `.text-start`. |
| `index.html` | Added `<meta name="keywords" content="...">`. |

## Files removed

- `src/context/LanguageContext.jsx`
- `src/hooks/useLanguage.js`

## Files left unchanged (except optional formatting)

- `src/i18n/index.js` – still exports `getTranslations`; nothing in the app imports it. Kept for backward compatibility or removal later.
- `src/pages/Home.jsx`, `src/layouts/MainLayout.jsx` – no logic changes.

---

## New dependencies

- **i18next** – core i18n engine.
- **react-i18next** – React bindings and `useTranslation`.
- **react-icons** – icons (FaWhatsapp, FaPhoneAlt, HiMenu, HiX).

Install with:

```bash
npm install
```

Then run:

```bash
npm run dev
```

---

## Behaviour preserved

- Single-page layout and all sections (Hero, About, Services, Gallery, Contact, Footer).
- WhatsApp and phone links and numbers unchanged.
- Developer credit link (Mohamed Nizar WhatsApp).
- Local images (hero, services, gallery) still used.
- GTM and existing SEO meta tags in `index.html` unchanged; SEO component only updates title, description, and keywords when language changes.
