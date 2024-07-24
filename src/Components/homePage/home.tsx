import { Header } from '../header/header';
import { Hero } from './hero/hero';
import './home.scss';
import { About } from './section-about/about';
import { OurPets } from './section-our-pets/ourPets';

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
      <OurPets />
    </div>
  );
}
