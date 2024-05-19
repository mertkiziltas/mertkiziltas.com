import { useState } from "react";
import NavbarCss from "../assets/css/Navbar.module.scss";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleChange = (e) => {
    setSearchData(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/Blog/Search/${searchData}`);
  };
  return (
    <div>
      <nav id={NavbarCss["desktop-nav"]}>
        <a href="/" className={NavbarCss["logo"]}>
          <h1>Mert Kızıltaş</h1>
        </a>
        <div className={NavbarCss["search-field"]}>
          <form onSubmit={handleSearch}>
            <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 36 36"
            >
              <path
                fill="#565656"
                d="M16.33 5.05A10.95 10.95 0 1 1 5.39 16A11 11 0 0 1 16.33 5.05m0-2.05a13 13 0 1 0 13 13a13 13 0 0 0-13-13"
                className="clr-i-outline clr-i-outline-path-1"
              />
              <path
                fill="#565656"
                d="m35 33.29l-7.37-7.42l-1.42 1.41l7.37 7.42A1 1 0 1 0 35 33.29"
                className="clr-i-outline clr-i-outline-path-2"
              />
              <path fill="none" d="M0 0h36v36H0z" />
            </svg>
            </button>
            <input
              onChange={handleChange}
              value={searchData}
              type="search"
              placeholder="Ara..."
            />
          </form>
        </div>
        <div>
          <ul className={NavbarCss["nav-links"]}>
            <li>
              <a href="/#about">Hakkımda</a>
            </li>
            <li>
              <a href="/#projects">Projeler</a>
            </li>
            <li>
              <a href="/#blog">Blog</a>
            </li>
            <li>
              <a href="/#contact">İletişim</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id={NavbarCss["hamburger-nav"]}>
        <div>
          <a href="/" className={NavbarCss["logo"]}>
            <h1>Mert Kızıltaş</h1>
          </a>
        </div>

        <div className={NavbarCss["hamburger-menu"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <path
              fill="#565656"
              d="M16.33 5.05A10.95 10.95 0 1 1 5.39 16A11 11 0 0 1 16.33 5.05m0-2.05a13 13 0 1 0 13 13a13 13 0 0 0-13-13"
              className="clr-i-outline clr-i-outline-path-1"
            />
            <path
              fill="#565656"
              d="m35 33.29l-7.37-7.42l-1.42 1.41l7.37 7.42A1 1 0 1 0 35 33.29"
              className="clr-i-outline clr-i-outline-path-2"
            />
            <path fill="none" d="M0 0h36v36H0z" />
          </svg>
          <div className={NavbarCss["hamburger-icon"]} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={`${NavbarCss["menu-links"]} ${
              isMenuOpen ? NavbarCss.open : ""
            }`}
          >
            <a href="/#about">Hakkımda</a>

            <a href="/#projects">Projeler</a>

            <a href="/#blog">Blog</a>

            <a href="/#contact">İletişim</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
