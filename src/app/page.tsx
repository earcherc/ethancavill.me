import Projects from '@/app/components/projects/projects';
import Skillset from '@/app/components/skillset/skillset';
import Landing from '@/app/components/landing/landing';
import Scrollspy from '@/app/components/scrollspy';
import About from '@/app/components/about/about';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ethan - Developer and Agency Owner',
  description: 'An experienced developer and agency owner.',
  robots: 'index, follow',
  openGraph: {
    url: 'https://www.ethancavill.me',
    title: 'Ethan - Developer and Agency Owner',
    description: 'An experienced developer and successful agency owner.',
    siteName: "Ethan's Portfolio",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ethcavill',
    title: 'Ethan - Developer and Agency Owner',
    description: 'An experienced developer and agency owner.',
  },
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
