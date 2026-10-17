import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { AdvancedDiagnosticsPage } from './pages/AdvancedDiagnosticsPage';
import { TestsPage } from './pages/TestsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { MedicalDisclaimerPage } from './pages/MedicalDisclaimerPage';
import { NotFoundPage } from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [pathname, hash]);

  return null;
}

const OFFICIAL_DOMAIN = 'https://genesisdiagnostic.in';

const PUBLIC_CANONICAL_ROUTES: Record<string, string> = {
  '/': `${OFFICIAL_DOMAIN}/`,
  '/about': `${OFFICIAL_DOMAIN}/about`,
  '/services': `${OFFICIAL_DOMAIN}/services`,
  '/advanced-genetic-tests': `${OFFICIAL_DOMAIN}/advanced-genetic-tests`,
  '/tests': `${OFFICIAL_DOMAIN}/tests`,
  '/contact': `${OFFICIAL_DOMAIN}/contact`,
  '/privacy-policy': `${OFFICIAL_DOMAIN}/privacy-policy`,
  '/terms-and-conditions': `${OFFICIAL_DOMAIN}/terms-and-conditions`,
  '/medical-disclaimer': `${OFFICIAL_DOMAIN}/medical-disclaimer`,
};

function CanonicalManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalized = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    const canonicalUrl = PUBLIC_CANONICAL_ROUTES[normalized];

    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (canonicalUrl) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);

      const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', canonicalUrl);
      }
    } else if (canonicalLink) {
      canonicalLink.remove();
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CanonicalManager />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/advanced-genetic-tests" element={<AdvancedDiagnosticsPage />} />
            <Route path="/advanced-diagnostics" element={<Navigate to="/advanced-genetic-tests" replace />} />
            <Route path="/tests" element={<TestsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/medical-disclaimer" element={<MedicalDisclaimerPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
