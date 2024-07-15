import "../Style/Navbar.css"
import Badge from '@mui/material/Badge';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light colr">
  <div className="container">
    <a className="navbar-brand" href="#"><img src="/Images/logo.png" alt=""  style={{width: "220px" , height:"70px"}} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <form className="d-flex">
        <input className="form-control me-2 logo" type="search" placeholder="Search in Daraz" aria-label="Search" />
        
      </form>
    <div className="collapse navbar-collapse  icon" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/login"} className="nav-link text-white  active" aria-current="page" href="#">< PersonOutlineIcon/>Login | </Link>
        </li>
        <li className="nav-item">
          <Link to={"/register"} className="nav-link text-white " href="#">Sign Up</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">< LanguageIcon/>EN</a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item bg  " href="#">UR / URDU</a></li>
            <li><a className="dropdown-item bg " href="#">EN / ENG</a></li>
     
          </ul>
     
       
     
        </li>
        <li className="nav-item" style={{listStyleType:"none"}}>
        <Link className="nav-link text-white" to="#">
        <Badge badgeContent={4} color="primary">
      <ShoppingCartIcon/>
    </Badge>
        </Link>
       </li>
      </ul>
     
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
