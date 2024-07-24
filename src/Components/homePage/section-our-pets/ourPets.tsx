import { allPets } from '../../../utils/allPets';
import './ourPets.scss';

export function OurPets() {
  return (
    <div className="section-pets">
      <div className="pets-container">
        <h2 className="pets-title">Our friends who are looking for a house</h2>
        <div className="pets-list">
          <button className="button-swap button-left"></button>
          {allPets.map(item => (
            <div key={item.id} className="card-pet">
              <img className="pet-img" src={item.img} alt="rat" />
              <p className="pet-name">{item.name}</p>
              <button className="button-learn">Learn more</button>
            </div>
          ))}
          <button className="button-swap button-right"></button>
        </div>
        <button className="button-details">Get to know the rest</button>
      </div>
    </div>
  );
}
