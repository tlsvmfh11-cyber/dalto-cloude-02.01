import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SystemSteps from './components/SystemSteps';
import ChoiceInfo from './components/ChoiceInfo';
import PriceInfo from './components/PriceInfo';
import ForYou from './components/ForYou';
import Facility from './components/Facility';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  useEffect(() => {
    // 우클릭 방지
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 드래그 방지
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // 개발자 도구 단축키 차단 (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'u')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c'))
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Header />
      <main role="main">
        <Hero />
        <SystemSteps />
        <ChoiceInfo />
        <PriceInfo />
        <ForYou />
        <Facility />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

export default App;
