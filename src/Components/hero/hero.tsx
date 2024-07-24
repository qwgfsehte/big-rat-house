import './hero.scss';

export function Hero() {
  return (
    <section className="hero-section">
      <div className="desription-container">
        <h2 className="hero-title">Everyone Deserves a Cozy Nest</h2>
        <p className="hero-desription">
          We invite you to welcome a delightful and friendly rat into your home.
          With a heart full of love, they will become an amazing companion,
          bringing happiness and warmth into your life!
        </p>
        <button className="hero-button">{'Find a New Friend'}</button>
      </div>
      <img
        src="/src/assets/hero-rat.png"
        alt=""
        className="hero-section__img"
      />
    </section>
  );
}
