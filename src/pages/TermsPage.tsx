import { useEffect } from 'react';
import { genesisData } from '../data/genesis';
import { Link } from 'react-router-dom';

export function TermsPage() {
  useEffect(() => {
    document.title = "Terms & Conditions | Genesis Diagnostic";
  }, []);

  return (
    <div className="bg-background-soft min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-border p-8 md:p-12">
          <h1 className="text-3xl font-heading font-extrabold text-primary mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-medical">
            <p className="text-text-secondary mb-6">
              <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
            </p>
            
            <p className="text-text-secondary mb-6">
              Welcome to Genesis Diagnostics & Imaging Centre ("Genesis", "we", "us", or "our"). 
              These Terms & Conditions govern your access to and use of our website. By accessing or using this website, 
              you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our website.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">1. Website Purpose and Informational Nature</h2>
            <p className="text-text-secondary mb-6">
              This website is provided for general informational purposes only. It is designed to provide information 
              about the diagnostic testing, radiology, and health check-up services we offer at our facility in Hafeezpet, Hyderabad. 
              The website does not offer direct online bookings, patient portals, or online medical consultations.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">2. Accuracy of Information and Pricing</h2>
            <p className="text-text-secondary mb-4">
              While we strive to keep the information on this website accurate and up-to-date, we make no representations or warranties 
              of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the website or the information, 
              products, services, or related graphics contained on the website.
            </p>
            <p className="text-text-secondary mb-6 font-semibold">
              Important: Test availability and prices listed on this website are subject to change without prior notice. 
              Please confirm all test details, availability, and final pricing directly with our staff by calling {genesisData.phone} before visiting our centre.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">3. Medical Disclaimer</h2>
            <p className="text-text-secondary mb-6">
              The content on this website does not constitute medical advice, diagnosis, or treatment. 
              Please refer to our <Link to="/medical-disclaimer" className="text-medical font-medium hover:underline">Medical Disclaimer</Link> for detailed information regarding the limitations of the medical information provided on this site.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">4. Acceptable Use</h2>
            <p className="text-text-secondary mb-6">
              You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, 
              or restrict or inhibit the use and enjoyment of this website by any third party. You must not use our website 
              to copy, store, host, transmit, send, use, publish, or distribute any material which consists of (or is linked to) 
              any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit, or other malicious computer software.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">5. Intellectual Property</h2>
            <p className="text-text-secondary mb-6">
              Unless otherwise stated, Genesis Diagnostics owns the intellectual property rights for all material on this website. 
              All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use, 
              subject to restrictions set in these terms and conditions.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-text-secondary mb-6">
              To the maximum extent permitted by applicable law, Genesis Diagnostics shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
              directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access 
              to or use of or inability to access or use the website. We do not guarantee uninterrupted or error-free availability of the website.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">7. External Links</h2>
            <p className="text-text-secondary mb-6">
              Our website may contain links to third-party websites or services that are not owned or controlled by Genesis Diagnostics. 
              We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party 
              websites or services.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">8. Governing Law and Jurisdiction</h2>
            <p className="text-text-secondary mb-6">
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes relating to these terms 
              and conditions will be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">9. Contact Us</h2>
            <p className="text-text-secondary mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-border mt-4 mb-6">
              <p className="text-primary font-bold mb-1">{genesisData.name}</p>
              <p className="text-text-secondary text-sm mb-1">{genesisData.address}</p>
              <p className="text-text-secondary text-sm">Phone: <a href="tel:+919701552056" className="text-medical font-medium">{genesisData.phone}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
