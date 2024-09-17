import { useMemo, useState } from 'react';
import { allPets } from '../../../utils/allPets';
import '../section-our-pets/ourPets.scss';
import { animated, useSpring } from '@react-spring/web';

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
    config: { tension: 500, friction: 40 },
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
    <>
      <button
        onClick={handleClickLeftButton}
        className="button-swap button-left"
      ></button>
      <animated.div className="cards-container" style={styles}>
        {currentSlide.map(item => (
          <div key={item.id} className="card-pet">
            <img className="pet-img" src={item.img} alt="rat" />
            <p className="pet-name">{item.name}</p>
            <button className="button-learn">Learn more</button>
          </div>
        ))}
      </animated.div>
      <button onClick={handleClickRightButton} className="button-swap"></button>
    </>
  );
}
