import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  useEffect(() => {
    document.title = "Page Not Found | Genesis Diagnostics";
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F7FAFC] px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-extrabold text-medical/20 mb-4">404</h1>
        <h2 className="text-3xl font-heading font-extrabold text-primary mb-6">Page Not Found</h2>
        <p className="text-slate-600 mb-8 text-lg">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link to="/" className="btn bg-primary hover:bg-primary/90 text-white border-0 px-8 py-3 rounded-xl inline-flex items-center transition-all">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
