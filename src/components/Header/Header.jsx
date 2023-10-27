import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="search__bar">
          <i className="ri-search-line"></i> Search...
        </div>

        <div className="header__buttons">
          <div className="theme__button">
            <i className="ri-moon-line"></i>
          </div>

          <div className="header__profile">
            <div className="profile__flex">
              <div className="profile__icon">
                <i className="ri-user-3-line"></i>
              </div>

              <span className="profile__name">Lucas</span>
            </div>

            <div className="arrow__icon">
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
