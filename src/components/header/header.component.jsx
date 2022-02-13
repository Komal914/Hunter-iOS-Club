import react from "react";
import ReactDOM from "react-dom";
import { Link, Router, BrowserRouter } from "react-router-dom";
import hunterLogo from "../../assets/hunterLogo.png";
import codepathLarge from "../../assets/codepathLarge.png";

import "./header.styles.scss";

const Header = ({}) => (
  <div className="header">
    <BrowserRouter>
      <div className="options">
        <Link className="option" to="/alumni">
          ALUMNI
        </Link>
        <Link className="option" to="/info">
          INFO
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
      <div className="logo-container">
        <img src={codepathLarge} alt="Logo2" />
      </div>
      <div className="logo-container">
        <img src={hunterLogo} alt="Logo" />
      </div>
    </BrowserRouter>
  </div>
);

export default Header;
