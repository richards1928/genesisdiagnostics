import { useEffect } from 'react';
import { genesisData } from '../data/genesis';

export function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | Genesis Diagnostic";
  }, []);

  return (
    <div className="bg-background-soft min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-border p-8 md:p-12">
          <h1 className="text-3xl font-heading font-extrabold text-primary mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-medical">
            <p className="text-text-secondary mb-6">
              <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
            </p>
            
            <p className="text-text-secondary mb-6">
              At Genesis Diagnostics & Imaging Centre ("Genesis", "we", "us", or "our"), we value your privacy. 
              This Privacy Policy explains how we collect, use, and protect any information when you visit our website 
              or interact with our diagnostic centre located in Gokul Plots, Hyderabad.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-text-secondary mb-4">
              Our website is primarily informational. We do not have user accounts, an online booking system, 
              or a direct online payment gateway. Therefore, we do not collect extensive personal or medical data 
              through this website.
            </p>
            <p className="text-text-secondary mb-4">
              We only collect information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-text-secondary mb-6 space-y-2">
              <li>Call us directly at {genesisData.phone}.</li>
              <li>Visit our diagnostic centre in person.</li>
            </ul>
            <p className="text-text-secondary mb-6">
              When communicating with us via phone, we may collect basic contact details and relevant medical information 
              necessary to schedule tests, provide sample collection services, or deliver test results.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-text-secondary mb-4">
              Any information you provide directly to Genesis is used strictly for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-text-secondary mb-6 space-y-2">
              <li>To provide the diagnostic tests and health check-up services you request.</li>
              <li>To communicate with you regarding appointments, test results, or service updates.</li>
              <li>To improve our services and patient care.</li>
              <li>To comply with applicable legal and regulatory requirements in India.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">3. Data Protection and Security</h2>
            <p className="text-text-secondary mb-6">
              We are committed to ensuring that your information is secure. While no physical or electronic system 
              is entirely impenetrable, we implement reasonable organizational and technical measures to protect the 
              personal and medical information you share with our laboratory staff. 
              Please note that standard telephone communications may not be fully encrypted.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">4. Sharing Your Information</h2>
            <p className="text-text-secondary mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may disclose your information 
              only if required by law, court order, or to authorized healthcare professionals involved in your care (with your consent).
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">5. Third-Party Links</h2>
            <p className="text-text-secondary mb-6">
              Our website may contain links to other websites of interest (e.g., Google Maps for directions). 
              Once you use these links to leave our site, we do not have control over those external websites. 
              Therefore, we cannot be responsible for the protection and privacy of any information you provide 
              whilst visiting such sites, and they are not governed by this Privacy Policy.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">6. Your Rights</h2>
            <p className="text-text-secondary mb-6">
              You have the right to request information about the data we hold about you and to request corrections 
              if any information is inaccurate. To make a request, please contact our centre directly.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">7. Contact Us</h2>
            <p className="text-text-secondary mb-4">
              If you have any questions or concerns regarding this Privacy Policy or how we handle your information, 
              please contact us at:
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
