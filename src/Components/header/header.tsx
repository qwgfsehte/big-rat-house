import { Link, useLocation } from 'react-router-dom';
import './header.scss';
import { HashLink } from 'react-router-hash-link';
import { useEffect } from 'react';

export function Header() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <header className="header">
      <div>
        <h1 className="logo-title">Big Rat House</h1>
        <div>Shelter for rats in Toronto</div>
      </div>
      <nav className="nav-panel">
        <HashLink className="nav-panel__item" smooth to="/#about-shelter">
          About the shelter
        </HashLink>
        <Link className="nav-panel__item" to="/our-pets">
          Our pets
        </Link>
        <HashLink className="nav-panel__item" smooth to="/#help-shelter">
          Help the shelter
        </HashLink>
        <HashLink className="nav-panel__item" smooth to="/#contacts">
          Contacts
        </HashLink>
      </nav>
    </header>
  );
}
