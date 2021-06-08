import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';
import companyLogo from '../../assets/logo_.png';


export default function Navigation() {

  const btnCollapse = useRef();
  const mainNav = useRef();
  const compLogo = useRef();
  const navbarCollapse = useRef();
  const navbarList = useRef();

  useEffect(() => {

    const navbarCollapseEl = navbarCollapse.current;
    const navbarListEl = navbarList.current;
    const mainNavEl = mainNav.current;
    const compLogoEl = compLogo.current;

    const scrollCollapseHandler = () => {
      window.scrollTo(0, 0);
      if (navbarCollapseEl.classList.contains("show")) {
        navbarCollapseEl.classList.remove('show');
      }
    }


    for (let i = 0; i < navbarListEl.children.length; i++) {
      navbarListEl.children[i].addEventListener("click", scrollCollapseHandler)
    }

    document.addEventListener("scroll", () => {
      mainNavEl.classList.toggle('active', window.scrollY > 0)
      compLogoEl.classList.toggle('active', window.scrollY > 0)
    });


    return () => {
      document.removeEventListener("scroll", () => {
        mainNavEl.classList.toggle('active', window.scrollY > 0)
        compLogoEl.classList.toggle('active', window.scrollY > 0)
      });
      for (let i = 0; i < navbarListEl.children.length; i++) {
        navbarListEl.children[i].addEventListener("click", scrollCollapseHandler)
      }
    }
  }, [])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark mainNav positionAbsolute" style={{ zIndex: 100 }} ref={mainNav}>
        <div className="container d-flex justify-content-between">
          <NavLink onClick={() => window.scrollTo(0, 0)} to='/' className="navbar-brand align-items-center d-flex p-0">
            <img src={companyLogo} alt="company logo" className="companyLogo" ref={compLogo} />
            <span className="ms-3 text-warning">Firma budowlana</span>
          </NavLink>

          <button ref={btnCollapse} className="navbar-toggler" style={{ boxShadow: '0 0 2px .5px white' }} type="button" data-bs-toggle="collapse" data-bs-target="#mainNavigation" aria-controls="mainNavigation" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ></span>
          </button>

          <div ref={navbarCollapse} className="collapse navbar-collapse" id="mainNavigation">
            <ul ref={navbarList} className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item me-0 me-lg-3">
                <NavLink exact to='/' className="nav-link" aria-current="page">Strona główna</NavLink>
              </li>
              <li className="nav-item me-0 me-lg-3">
                <NavLink to='/about' className="nav-link" aria-current="page">O firmie</NavLink>
              </li>
              <li className="nav-item me-0 me-lg-3">
                <NavLink to="/projects" className="nav-link" aria-current="page">Realizacje</NavLink>
              </li>
              <li className="nav-item me-0 me-lg-5">
                <NavLink to="/offers" className="nav-link" aria-current="page">Oferta</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link text-white btn-outline-warning btn" aria-current="page">Kontakt</NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>

    </>
  )
}