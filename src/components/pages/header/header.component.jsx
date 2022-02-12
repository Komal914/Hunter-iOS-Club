import react from "react";
import ReactDOM from 'react-dom';
import { Link, Router, BrowserRouter  } from "react-router-dom";
import   hunterLogo   from "../../../assests/hunterLogo.png";
import  codepathLarge  from "../../../assests/codepathLarge.png";

import "./header.styles.scss";

const Header = ({}) =>  
(<div className="header">
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
        <img src={hunterLogo} alt="Logo" width="25%" height="70px" style={{float : 'center', paddingRight : '10px'}} />
      {/* <img src={codepathLarge} alt="Logo2" width="20%" height="70px"/> */}
   </div>
</BrowserRouter>
    


</div>)

export default Header;
