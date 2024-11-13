import ButtonScroll from '../button-scroll';
import { Hero } from './hero';
import './styles.scss';
import { About } from './section-about';
import { SectionDonation } from './section-donation';
import { SectionHelp } from './section-help';
import { OurPets } from './section-our-pets';

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
