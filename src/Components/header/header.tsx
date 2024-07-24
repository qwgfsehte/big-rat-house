import './header.scss';

export function Header() {
  return (
    <header className="header">
      <div>
        <h1 className="logo-title">Tailed house</h1>
        <div>Shelter for rats in Toronto</div>
      </div>
      <nav className="nav-panel">
        <a>About the shelter</a>
        <a>Our pets</a>
        <a>Help the shelter</a>
        <a>Contacts</a>
      </nav>
    </header>
  );
}
