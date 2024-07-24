import { Header } from '../header/header';
import { Hero } from '../hero/hero';
import './home.scss';

export function Home() {
  return (
    <div className="home-container">
      <div className="hero-container">
        <Header />
        <Hero />
      </div>
    </div>
  );
}
