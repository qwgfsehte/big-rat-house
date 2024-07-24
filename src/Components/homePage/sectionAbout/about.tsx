import './about.scss';

export function About() {
  return (
    <section className="about-section" id="section-about">
      <img
        src="/src/assets/about-rat.png"
        alt=""
        className="about-section__img"
      />
      <div className="about-container__description">
        <h2 className="about-title">{'About the Shelter "Tailed House"'}</h2>
        <p className="about-description">
          {`At Tailed House, we currently care for 207 rats and 98 hamsters.
          Unfortunately, statistics show that only about 25% of them will find
          their forever homes. The remaining animals will continue to stay with
          us, holding on to the hope that one day they'll find a loving family.`}
        </p>
        <p className="about-description">
          We ensure our residents receive the highest quality food and medical
          care, ensuring they remain healthy, comfortable, and emotionally
          secure. Our efforts are supported by a dedicated team of 65 volunteers
          and 19 staff members, each bringing a range of skills to the table.
          Approximately 10% of our animals find homes with our staff members,
          who grow deeply attached to the animals they care for and cannot
          imagine leaving them behind. Join us in making a difference for these
          little ones and help us give them the love and care they deserve.
        </p>
      </div>
    </section>
  );
}
