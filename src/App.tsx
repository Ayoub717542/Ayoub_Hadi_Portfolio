import { Sidebar } from './components/Sidebar';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
      <Sidebar />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
