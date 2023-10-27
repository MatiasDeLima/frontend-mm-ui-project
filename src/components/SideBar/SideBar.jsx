
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
        <a className="sidebar__logo" href=""><img src="src/assets/logo-icon.svg" alt="" />mm-ui</a>

        <div className="sidebar__menu">
          <ul className="sidebar__list">
            <li className="sidebar__item">
              <a href="#" className="sidebar__link">
                <div className="sidebar__icon">
                  <i className="ri-home-line"></i>
                </div>
                Visão Geral
              </a>
            </li>

            <li className="sidebar__item">
              <a href="#" className="sidebar__link">
                <div className="sidebar__icon">
                  <i className="ri-bank-line"></i>
                </div>
                Gerenciamento Urbano
              </a>
            </li>

            <li className="sidebar__item">
              <a href="#" className="sidebar__link">
                <div className="sidebar__icon">
                  <i className="ri-bank-line"></i>
                </div>
                Economia
              </a>
            </li>

            <li className="sidebar__item">
              <a href="#" className="sidebar__link">
                <div className="sidebar__icon">
                  <i className="ri-award-line"></i>
                </div>
                Educação e cultura
              </a>
            </li>

            <li className="sidebar__item">
              <a href="#" className="sidebar__link">
                <div className="sidebar__icon">
                  <i className="ri-flag-2-line"></i>
                </div>
                Fisc e sustentabilidade
              </a>
            </li>

            <li className="sidebar__item">
              <a href="#" className="sidebar__link">
                <div className="sidebar__icon">
                  <i className="ri-tools-line"></i>
                </div>
                Inovações
              </a>
            </li>

            <li className="sidebar__item">
              <a href="#" className="sidebar__link">
                <div className="sidebar__icon">
                  <i className="ri-service-line"></i>
                </div>
                Meio ambiente
              </a>
            </li>

            <li className="sidebar__item">
              <a href="#" className="sidebar__link">
                <div className="sidebar__icon">
                   <i className="ri-flask-line"></i>
                </div>
                Saúde
              </a>
            </li>

            <li className="sidebar__item">
              <a href="#" className="sidebar__link">
                <div className="sidebar__icon">
                  <i className="ri-lock-line"></i>
                </div>
                Segurança pública
              </a>
            </li>

            <li className="sidebar__item">
              <a href="#" className="sidebar__link">
                <div className="sidebar__icon">
                  <i className="ri-file-copy-line"></i>
                </div>
                D. especifico
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default SideBar