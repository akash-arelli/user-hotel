import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Ledger.css';
import Navbar from '../Nav/Navbar'

class Ledger extends React.Component {

  
  
  
    render() {
 
  
      return (
        <div className="main-container">
          <h2 className="main-heading"> Ledger Bills</h2>
  
          <div className="table-div1">
            <h2 id="header">This month sales:</h2>
             <br/>
          <table>
             
              <tr>
                <th>No.</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th> ₹ Price</th>
                <th> ₹ Total</th>
              </tr>  
          
          </table>
       </div>
           
     
         <div className="table-div1">
          <h2 id="header">Month wise sales:</h2>
              <br/>
            <form className="form1"> 
             <label for="month">Choose a month:</label>
           
             <select id="month" name="month">    
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
          
             
            </form>
           <br/>
           <br/>
       
           <table>
             <tr>
              <th>No.</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th> ₹ Price</th>
              <th> ₹ Total</th>
              </tr>
           </table>
        </div>  
       
        <Link to="/dashboard">
              <button className="imput-box cta">
                Go Back
              </button>
              </Link>
        </div>
      );
    }
  }
  
export default Ledger;