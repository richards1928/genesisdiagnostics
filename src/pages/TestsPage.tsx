import { useEffect } from 'react';
import { TestsAndPrices } from '../components/sections/TestsAndPrices';

export function TestsPage() {
  useEffect(() => {
    document.title = "Diagnostic Tests & Prices | Genesis Diagnostic";
  }, []);

  return (
    <>
      <TestsAndPrices />
    </>
  );
}
