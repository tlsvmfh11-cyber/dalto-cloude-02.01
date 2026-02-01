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
