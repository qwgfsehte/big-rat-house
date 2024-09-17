import Slider from '../slider/slider';
import './ourPets.scss';

export function OurPets() {
  return (
    <div className="section-pets">
      <div className="pets-container">
        <h2 className="pets-title">Our friends who are looking for a house</h2>
        <div className="slider-container">
          <Slider />
        </div>
        <button className="button-details">Get to know the rest</button>
      </div>
    </div>
  );
}
