import { helpIcons } from '../../../utils/helpIcons';
import './help.scss';

export function SectionHelp() {
  return (
    <section className="section-help">
      <h2 className="help-title">How you can help our shelter</h2>
      <div className="help-list">
        <div className="help-slider">
          {helpIcons.concat(helpIcons).map((item, index) => (
            <div key={index} className="help-list__item">
              <img src={item.img} alt={item.name} className="help-img" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="help-info">
        <div className="help-info__description">
          <h3 className="help-info__title">
            Become a volunteer at our shelter!
          </h3>
          <p className="help-info__text">
            If you want to contribute to helping animals and become part of our
            friendly team, we will be glad to see you among our volunteers. At
            our shelter we are always looking for active and caring people who
            are ready to help animals that need love and care.
          </p>
          <p className="help-info__text">
            Volunteering at our shelter is an opportunity not only to help
            animals, but also to find new friends, acquire useful skills and
            become part of a big cause. We appreciate your every effort and are
            looking forward to having you on our team!
          </p>
          <button className="help-button">Send a form</button>
        </div>
        <div className="volunteer-container">
          <img
            src="/src/assets/help-section.jpg"
            alt="volunteer with rat"
            className="volunteer-img"
          />
        </div>
      </div>
    </section>
  );
}
