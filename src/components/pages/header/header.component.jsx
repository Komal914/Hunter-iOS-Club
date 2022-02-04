import react from "react";
import { Link } from "react-router-dom";
//  import hunterLogo from "./hunterLogo.png";
// import codepathLarge from "./codepathLarge.png";

import "./header.styles.scss";

const Header = ({}) => <div>Header</div>;


  <div className="header">

    {/* <img src={hunterLogo} height={100} width={100} /> */}

    <Link className="logo-container" to="/">
    </Link>
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
        
  </div>



export default Header;
