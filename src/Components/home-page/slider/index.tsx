import { useEffect, useMemo, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { CardPet } from '../../card-pet';
import './styles.scss';

const ITEMS_PER_PAGE = 3;
const FIRST_SLIDE = 1;

type Rat = {
  id: number;
  name: string;
  img: string;
};

export default function Slider() {
  const [currentNumberSlide, setCurrentNumberSlide] = useState(1);
  const [direction, setDirection] = useState(1);
  const [allPets, setRats] = useState<Rat[]>([]);

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

  const styles = useSpring({
    from: { transform: `translateX(${direction * 100}%)` },
    to: { transform: 'translateX(0%)' },
    reset: true,
    config: { tension: 400, friction: 40 },
  });

  const handleClickRightButton = () => {
    setDirection(1);
    if (currentNumberSlide === allPets.length / ITEMS_PER_PAGE) {
      setCurrentNumberSlide(FIRST_SLIDE);
    } else {
      setCurrentNumberSlide(currentNumberSlide + 1);
    }
  };

  const handleClickLeftButton = () => {
    setDirection(-1);
    if (currentNumberSlide === FIRST_SLIDE) {
      setCurrentNumberSlide(allPets.length / ITEMS_PER_PAGE);
    } else {
      setCurrentNumberSlide(currentNumberSlide - 1);
    }
  };

  return (
    <div className="slider-container">
      <div className="background-button">
        <button
          onClick={handleClickLeftButton}
          className="button-swap button-left"
        ></button>
      </div>
      <animated.div className="cards-container" style={styles}>
        {currentSlide.map((item, index) => (
          <CardPet pet={item} key={index} isPage="home" />
        ))}
      </animated.div>
      <div className="background-button">
        <button
          onClick={handleClickRightButton}
          className="button-swap"
        ></button>
      </div>
    </div>
  );
}
