import Scrollspy from '@/app/components/scrollspy';
import Skillset from '@/app/components/services';
import Projects from '@/app/components/projects';
import Landing from '@/app/components/landing';
import About from '@/app/components/about';

export default function Home() {
  return (
    <main>
      <Landing />
      <About />
      <Skillset />
      <Projects />
      <Scrollspy />
    </main>
  );
}
