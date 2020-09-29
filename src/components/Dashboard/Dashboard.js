import React from 'react'
import './Dashboard.css'

import Navbar from '../Nav/Navbar'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
           
            <div id="dashboard-body">
        <div className="dashboard-section">
        <div className="dashboard-content">
            <div className="content-div">
            <h2>Welcome  </h2> 
            
            <h5>Services Offered</h5>
            
            <button className="cta-dashboard">New Billing </button>
                 
                 <Link to="/ledger">
            <button className="cta-dashboard admin">Ledger Bills </button>
            </Link>

            <Link to="/orderstock">
            <button className="cta-dashboard stock">Order Stock </button>
            </Link>
            
           </div>
           <div>
           <button className="logout">Logout  </button>
           
         </div>
            </div>
       
      
      </div> 
           
      
            </div>
        </div>
    );
}
