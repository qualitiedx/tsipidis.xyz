import { useState } from 'react';
import { ThemeProvider } from './ThemeProvider';
import Navigation from './Navigation';
import Hero from './Hero';
import Experience from './sections/Experience';
import Industries from './sections/Industries';
import Projects from './sections/Projects';
import Approach from './sections/Approach';
import Contact from './sections/Contact';
import LoadingScreen from './LoadingScreen';
import FloatingContactButton from './FloatingContactButton';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}

      {!isLoading && (
        <>
          <Navigation />
          <Hero />
          <Experience />
          <Industries />
          <Projects />
          <Approach />
          <Contact />
          <FloatingContactButton />
        </>
      )}
    </ThemeProvider>
  );
}
