import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/LandingPage';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import Create from './components/Create';

function App() {
  return (
    <React.Fragment>
      <Route exact path = '/' component={Landing}></Route>
      <Route path='/home' component={Navbar}></Route>
      <Route exact path = '/home' component={Home}></Route>
      <Route path='/home/pokemon/:name' component={Pokemon}></Route>
      <Route path='/home/create-pokemon' component={Create}></Route>
    </React.Fragment>
  );
}

export default App;