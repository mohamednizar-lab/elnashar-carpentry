import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { WHATSAPP_URL, PHONE_TEL } from '../constants/links'

const baseClass =
  'w-14 h-14 rounded-full flex items-center justify-center text-white shadow-card hover:scale-110 active:scale-95 transition-transform duration-200'

export default function FloatingButtons() {
  return (
    <div
      className="fixed bottom-28 right-5 z-50 flex flex-col gap-4"
      dir="ltr"
    >
      {/* WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} bg-[#25D366]`}
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" aria-hidden />
      </a>

      {/* Call */}
      <a
        href={PHONE_TEL}
        className={`${baseClass} bg-walnut`}
        aria-label="Call"
      >
        <FaPhoneAlt className="w-6 h-6" aria-hidden />
      </a>
    </div>
  )
}
