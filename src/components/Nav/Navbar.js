import React from 'react' ;
import './Navbar.css'
import { Link } from 'react-router-dom';

class Navbar extends React.Component{


openMenu = () =>{

  var navmenu = document.getElementById('navmenu') ;
  var hamburger = document.getElementById('burger') ;
  hamburger.classList.toggle('hamburger-open') ;
  navmenu.classList.toggle('open') ;
}

render(){
    return (
      <nav>
        <div className="logo-div"><a href="/">Martand Misal</a></div>
        <div className="nav-menu" id="navmenu">
          <ul>
          
          <li>
            <Link to="/billing">Billing</Link>
          </li>
          <li>
            <Link to="/orderstock">order stock</Link>
          </li>

            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
            <Link to="/logout">Logout</Link>
            </li>

          </ul>
        </div>

        <div className="hamburger" id="burger" onClick={this.openMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    );
}

}

export default Navbar ;