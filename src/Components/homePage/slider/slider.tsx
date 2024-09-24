import { useMemo, useState } from 'react';
import { allPets } from '../../../utils/allPets';
import { animated, useSpring } from '@react-spring/web';
import { CardPet } from '../../card-pet/card-pet';
import './slider.scss';

const ITEMS_PER_PAGE = 3;
const FIRST_SLIDE = 1;

export default function Slider() {
  const [currentNumberSlide, setCurrentNumberSlide] = useState(1);
  const [direction, setDirection] = useState(1);

  const currentSlide = useMemo(() => {
    const indexOfLastItem = currentNumberSlide * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    return allPets.slice(indexOfFirstItem, indexOfLastItem);
  }, [currentNumberSlide]);

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
          <CardPet pet={item} key={index} />
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
