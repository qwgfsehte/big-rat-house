import { Header } from '../header/header';
import { Hero } from './hero/hero';
import './home.scss';
import { About } from './sectionAbout/about';

export function Home() {
  return (
    <div className="home-container">
      <div className="noise-background">
        <div className="hero-container">
          <Header />
          <Hero />
        </div>
      </div>
      <About />
    </div>
  );
}
