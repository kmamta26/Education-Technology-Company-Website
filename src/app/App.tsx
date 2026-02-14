import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SoftwarePage } from './pages/SoftwarePage';
import { EducationPage } from './pages/EducationPage';
import { AdvertisingPage } from './pages/AdvertisingPage';
import { CoursesPage } from './pages/CoursesPage';
import { ContactPage } from './pages/ContactPage';
import { ScrollToHash } from './components/ScrollToHash';
import { BackToTop } from './components/BackToTop';
import { ClientLogoSlider } from './components/ClientLogoSlider';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen bg-[#0B0B0B] text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/software" element={<SoftwarePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/advertising" element={<AdvertisingPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path='/advertising' element={<ClientLogoSlider/>}/>
          </Routes>
        </main>
        <Footer />
        <BackToTop />
        <Toaster richColors position="top-right" />
      </div>
    </BrowserRouter>
  );
}