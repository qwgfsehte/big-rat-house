import ButtonScroll from '../buttonScroll/button';
import { Hero } from './hero/hero';
import './home.scss';
import { About } from './section-about/about';
import { SectionDonation } from './section-donation/donation';
import { SectionHelp } from './section-help/help';
import { OurPets } from './section-our-pets/ourPets';

export function Home() {
  return (
    <div className="home-container">
      <Hero />
      <About />
      <OurPets />
      <SectionHelp />
      <SectionDonation />
      <ButtonScroll />
    </div>
  );
}
