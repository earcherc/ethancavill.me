import Projects from '@/app/components/projects/projects';
import Skillset from '@/app/components/skillset/skillset';
import Landing from '@/app/components/landing/landing';
import Scrollspy from '@/app/components/scrollspy';
import About from '@/app/components/about/about';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ethan',
  description: 'Developer and Agency Owner',
};

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
