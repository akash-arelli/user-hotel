import React from 'react';
import './App.css';
import Navbar from './components/Nav/Navbar' ;
import Home from './components/Home/Home.js'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import Ledger from './components/Ledger/Ledger'
import {
  BrowserRouter as Router,Switch,Route,Link
} from "react-router-dom";
import Orderstock from './components/OrderStock/Orderstock';


function App() {
  return (
    <Router>
    <div className="App">
      
   
    <Switch>
          <Route exact path="/Dashboard">
            <Dashboard />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
         

          <Route exact path="/login">
            <Login />
          </Route>



          <Route exact path="/orderstock">
            <Orderstock />
          </Route>


          <Route exact path="/ledger">
            <Ledger />
          </Route>






        </Switch>

         
    


      </div>
   
      </Router>
  );
}

export default App;
