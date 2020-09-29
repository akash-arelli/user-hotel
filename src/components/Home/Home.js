import React from 'react' ;
import './Home.css'
import {Link} from 'react-router-dom'


export default function Home(){

return (
  <div>
   <div className="home-section">
      <div className="home-content">
          <div className="content-div">
          <h2>Martand Misal.</h2>
          <h5>Taste that you won't forget.</h5>
          <Link to="/login">
          <button className="cta">Login As Branch</button>
          </Link>

          <button className="cta admin">Login As Admin</button>
          </div>
          </div>

      <div className="home-image">
        {/* <img src={require('../../assets/ils1.svg')} /> */}
      </div>
    </div>              
                       
                           
</div>             

);


}