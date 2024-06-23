import React , {useState} from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {

  const [isOpen , setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="navbar" >
      <div className="navbar_logo_container">
        <Link to="/" className="navbar_logo" ><img className="logo_img" src={logo} alt="AIC" /></Link>
      </div>
      <div className="navbar_heading">AI COMMUNITY</div>
        <div className={`navbar__links ${isOpen ? 'open' : ''}`}>
            <Link to="/" className="navbar__link">Home</Link>
            <Link to="/Blogs" className="navbar__link">Blogs</Link>
            <Link to="/ourTeam" className="navbar__link">Our Team</Link>
            <Link to="/Projects" className="navbar__link">Projects</Link>
        </div>
        <div className="navbar__toggle" onClick={handleToggle}><img src={menu} className="menu_logo"/></div>
    </div>
  );
}
