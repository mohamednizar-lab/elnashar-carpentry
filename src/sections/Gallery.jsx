import { useTranslation } from 'react-i18next'
import g1 from '../assets/images/gallery/gallery-1.jpg'
import g2 from '../assets/images/gallery/gallery-2.jpg'
import g3 from '../assets/images/gallery/gallery-3.jpg'
import g4 from '../assets/images/gallery/gallery-4.jpg'
import g5 from '../assets/images/gallery/gallery-5.jpg'
import g6 from '../assets/images/gallery/gallery-6.jpg'
import g7 from '../assets/images/gallery/gallery-7.jpg'
import g8 from '../assets/images/gallery/gallery-8.jpg'

const GALLERY_IMAGES = [
  { url: g1, altKey: 'gallery.img1' },
  { url: g2, altKey: 'gallery.img2' },
  { url: g3, altKey: 'gallery.img3' },
  { url: g4, altKey: 'gallery.img4' },
  { url: g5, altKey: 'gallery.img5' },
  { url: g6, altKey: 'gallery.img6' },
  { url: g7, altKey: 'gallery.img7' },
  { url: g8, altKey: 'gallery.img8' },
]

export default function Gallery() {
  const { t } = useTranslation()

  return (
    <section id="gallery" className="py-20 md:py-28 bg-wood-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-walnut text-center mb-16">
          {t('gallery.title')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-shadow duration-300 group"
            >
              <img
                src={img.url}
                alt={t(img.altKey)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
