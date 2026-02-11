import { useState, useEffect } from 'react'

const SECTION_IDS = ['hero', 'about', 'services', 'gallery', 'contact']

export function useActiveSection() {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const id = entry.target.id
          if (SECTION_IDS.includes(id)) {
            setActiveId(id)
            break
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return activeId
}
