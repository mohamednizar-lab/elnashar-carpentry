import { LanguageProvider } from './context/LanguageContext'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import SEO from './components/SEO'

export default function App() {
  return (
    <LanguageProvider>
      <SEO />
      <MainLayout>
        <Home />
      </MainLayout>
    </LanguageProvider>
  )
}
