import Navbar from '../components/Navbar'
import FloatingButtons from '../components/FloatingButtons'

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <FloatingButtons />
    </>
  )
}
