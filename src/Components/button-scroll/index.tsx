import { useEffect, useState } from 'react';
import './styles.scss';

export default function ButtonScroll() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={handleClickScroll}
      className={`button-scroll ${isVisible ? 'show' : ''}`}
    ></button>
  );
}
