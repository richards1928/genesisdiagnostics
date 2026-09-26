import { useEffect } from 'react';
import { genesisData } from '../data/genesis';
import { AlertCircle } from 'lucide-react';

export function MedicalDisclaimerPage() {
  useEffect(() => {
    document.title = "Medical Disclaimer | Genesis Diagnostic";
  }, []);

  return (
    <div className="bg-background-soft min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-border p-8 md:p-12">
          
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-medical" />
            </div>
            <h1 className="text-3xl font-heading font-extrabold text-primary">Medical Disclaimer</h1>
          </div>
          
          <div className="prose prose-slate max-w-none prose-headings:text-primary">
            <p className="text-text-secondary mb-6">
              <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
            </p>

            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 mb-8">
              <p className="text-primary font-semibold m-0">
                The information provided on the Genesis Diagnostics & Imaging Centre website is for general informational purposes only 
                and is not intended to substitute for professional medical advice, diagnosis, or treatment.
              </p>
            </div>

            <h2 className="text-xl font-bold mt-8 mb-4">1. No Medical Advice</h2>
            <p className="text-text-secondary mb-6">
              The content on this website, including but not limited to test descriptions, health packages, articles, 
              graphics, and other materials, is provided strictly for educational and informational purposes. 
              Reading this website does not establish a doctor-patient or healthcare provider-patient relationship.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">2. Consult a Qualified Healthcare Professional</h2>
            <p className="text-text-secondary mb-6">
              You should always seek the advice of your physician or other qualified healthcare provider with any questions 
              you may have regarding a medical condition, symptoms, or recommended treatment. 
              Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">3. Test Selection and Interpretation</h2>
            <p className="text-text-secondary mb-6">
              The diagnostic tests and genetic profiles listed on our website are intended to be interpreted by qualified medical professionals 
              within the appropriate clinical context. 
              Self-diagnosis and self-treatment based on test names, descriptions, or prices listed on this website can be dangerous. 
              Individual medical decisions, including which tests are appropriate for your specific health situation, 
              should be made in consultation with your doctor.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">4. Emergencies</h2>
            <p className="text-text-secondary mb-6">
              If you think you may have a medical emergency, call your doctor, go to the nearest hospital emergency department, 
              or call local emergency services immediately. Genesis Diagnostics does not provide emergency medical treatment.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">5. Contact Us for Clarification</h2>
            <p className="text-text-secondary mb-4">
              If you have specific questions about the availability of a test, sample collection requirements, or pricing, 
              please contact our centre directly. However, our staff cannot provide medical advice or interpret test results over the phone.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-border mt-4 mb-6">
              <p className="text-primary font-bold mb-1">{genesisData.name}</p>
              <p className="text-text-secondary text-sm">Phone: <a href="tel:+919701552056" className="text-medical font-medium">{genesisData.phone}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
