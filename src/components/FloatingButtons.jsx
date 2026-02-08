const WHATSAPP = 'https://api.whatsapp.com/send?phone=971505001597'
const PHONE = 'tel:+971505001597'

export default function FloatingButtons() {
  return (
    <>
      
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="
          fixed bottom-10 right-5 z-40
          w-14 h-14
          rounded-full bg-[#25D366]
          flex items-center justify-center
          text-white
          shadow-lg
          hover:scale-110 active:scale-95
          transition-all duration-200
        "
      >
        
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M16.001 3C8.821 3 3 8.82 3 16c0 2.82.92 5.43 2.48 7.54L3 29l5.63-2.42A12.94 12.94 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.5c-2.27 0-4.39-.66-6.19-1.8l-.44-.27-3.34 1.43.71-3.53-.29-.46A10.44 10.44 0 015.5 16c0-5.79 4.71-10.5 10.5-10.5S26.5 10.21 26.5 16 21.79 26.5 16 26.5zm5.74-7.84c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.69.16s-.79 1-1 1.2c-.2.2-.4.22-.74.07-.34-.16-1.43-.53-2.72-1.7-1-.9-1.68-2-1.88-2.34-.2-.34-.02-.52.15-.68.15-.15.34-.39.5-.59.16-.2.21-.34.31-.56.1-.2.05-.39-.02-.55-.07-.16-.69-1.66-.95-2.27-.25-.6-.5-.52-.69-.53l-.59-.01c-.2 0-.55.07-.84.39-.29.31-1.1 1.07-1.1 2.61s1.12 3.03 1.28 3.24c.16.2 2.2 3.36 5.33 4.71.75.32 1.33.5 1.78.64.75.24 1.44.21 1.98.13.6-.09 1.83-.75 2.09-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37z"/>
        </svg>
      </a>

      
      <a
        href={PHONE}
        aria-label="Call"
        className="
          fixed bottom-10 left-5 z-40
          w-14 h-14
          rounded-full bg-[#6b4f3b]
          flex items-center justify-center
          text-white
          shadow-lg
          hover:scale-110 active:scale-95
          transition-all duration-200
        "
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>
    </>
  )
}