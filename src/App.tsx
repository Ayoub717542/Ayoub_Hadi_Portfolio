import { Sidebar } from './components/Sidebar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { usePaging } from './components/usePaging';
import { Background } from './components/Background';
import { ChatBot } from './components/ChatBot';

export default function App() {
  usePaging();

  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
      <Background />
      <Sidebar />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <ChatBot />
    </div>
  );
}
