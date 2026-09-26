import { useEffect } from 'react';
import { Location } from '../components/sections/Location';

export function ContactPage() {
  useEffect(() => {
    document.title = "Contact Genesis Diagnostic | Hafeezpet, Hyderabad";
  }, []);

  return (
    <>
      <Location />
    </>
  );
}
