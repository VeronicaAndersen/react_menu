
import Navbar from './components/Navbar';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Products from './pages/Products';
import Contact from './pages/Contact';
import PrimaryButton from './components/buttons/PrimaryButton';
import SecondaryButton from './components/buttons/SecondaryButton';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/products' component={Products}/>
        <Route path='/contact' component={Contact}/>
        <Route component={PrimaryButton}/>
        <Route component={SecondaryButton}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
