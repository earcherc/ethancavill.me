import Projects from '@/app/components/projects/projects';
import Skillset from '@/app/components/services/skillset';
import Landing from '@/app/components/landing/landing';
import Scrollspy from '@/app/components/scrollspy';
import About from '@/app/components/about/about';

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
