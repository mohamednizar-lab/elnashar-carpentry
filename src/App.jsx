import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import SEO from './components/SEO'

export default function App() {
  return (
    <>
      <SEO />
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  )
}
