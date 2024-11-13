import './styles.scss';

interface CardPetProps {
  pet: {
    id: number;
    name: string;
    img: string;
  };
  isPage: string;
}

export function CardPet({ pet, isPage }: CardPetProps) {
  return (
    <div
      key={pet.id}
      className={`card-pet ${isPage === 'home' ? 'home-card' : 'our-pets-card'}`}
    >
      <img className="pet-img" src={pet.img} alt="rat" />
      <p className="pet-name">{pet.name}</p>
      <button
        className={`button-learn ${isPage === 'home' ? 'home-card' : 'our-pets-card'}`}
      >
        Learn more
      </button>
    </div>
  );
}
