import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
          <div className="search__bar">
            <i className="ri-search-line"></i> Search...
          </div>
      </nav>
    </header>
  )
}

export default Header