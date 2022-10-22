import React from "react";

const Navbar = () => {
  return (
    <div>
      <header id="header" class="header_style1">
        <nav className="navbar navbar-expand-lg p-4 ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#">
                <img
                  src="https://easywebtouch.com/images/logo-dark.png"
                  style={{ width: 120 }}
                />
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{ color: "white", textTransform: "uppercase" }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item mx-5">
                  <a
                    className="nav-link nav_li"
                    href="#about"
                    style={{ color: "white", textTransform: "uppercase" }}
                  >
                    About Us
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#services"
                    style={{ color: "white", textTransform: "uppercase" }}
                  >
                    Our Services
                  </a>
                </li>
                <li className="nav-item ms-5">
                  <a
                    className="nav-link"
                    href="#contact"
                    style={{ color: "white", textTransform: "uppercase" }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
