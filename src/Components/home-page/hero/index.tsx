import { HashLink } from 'react-router-hash-link';
import './styles.scss';

export function Hero() {
  return (
    <div className="noise-background">
      <section className="hero-section">
        <div className="desription-container">
          <h2 className="hero-title">Everyone Deserves a Cozy Nest</h2>
          <p className="hero-desription">
            We invite you to welcome a delightful and friendly rat into your
            home. With a heart full of love, they will become an amazing
            companion, bringing happiness and warmth into your life!
          </p>
          <HashLink className="hero-button" smooth to="/#our-pets">
            Find a New Friend
          </HashLink>
        </div>
        <img src="/hero-rat.png" alt="" className="hero-section__img" />
      </section>
    </div>
  );
}
