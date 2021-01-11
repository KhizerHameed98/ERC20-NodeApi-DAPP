import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import TotalSupply from './pages/TotalSupply';
import BalanceOf from './pages/BalanceOf';
import Allowance from './pages/Allowance';
import Transfer from './pages/Transfer';
import Approve from "./pages/Approve";
import TransferFrom from "./pages/TransferFrom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/totalSupply'  component={TotalSupply} />
          <Route path='/balanceOf'  component={BalanceOf} />
          <Route path='/transfer'  component={Transfer} />
          <Route path='/allowance'  component={Allowance} />
          <Route path='/approve'  component={Approve} />
          <Route path='/transferFrom'  component={TransferFrom} />
        
        </Switch>
      </Router>
   

    </>
  );
}

export default App;
