import { useEffect, useMemo, useState } from 'react';
import { CardPet } from '../card-pet';
import './styles.scss';

const ITEMS_PER_PAGE = 8;

export function OurPetsPage() {
  const [currentNumberSlide] = useState(1);
  const [allPets, setRats] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setRats(data))
      .catch(error => console.error('Ошибка при загрузке данных:', error));
  }, []);

  const currentSlide = useMemo(() => {
    const indexOfLastItem = currentNumberSlide * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    return allPets.slice(indexOfFirstItem, indexOfLastItem);
  }, [allPets, currentNumberSlide]);

  return (
    <>
      {allPets ? (
        <>
          <h3 className="pets-page__title">
            Our friends who are looking for a house
          </h3>
          <div className="pets-page__list">
            {currentSlide.map((item, index) => (
              <CardPet pet={item} key={index} isPage="our-pets" />
            ))}
          </div>
        </>
      ) : (
        <>Loading</>
      )}
    </>
  );
}
