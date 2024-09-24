import './card-pet.scss';

interface CardPetProps {
  pet: {
    id: number;
    name: string;
    img: string;
  };
}

export function CardPet({ pet }: CardPetProps) {
  return (
    <div key={pet.id} className="card-pet">
      <img className="pet-img" src={pet.img} alt="rat" />
      <p className="pet-name">{pet.name}</p>
      <button className="button-learn">Learn more</button>
    </div>
  );
}
