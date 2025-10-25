import { ThemeProvider } from './ThemeProvider';
import Navigation from './Navigation';
import Hero from './Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Approach from './sections/Approach';
import Contact from './sections/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Approach />
      <Contact />
    </ThemeProvider>
  );
}
