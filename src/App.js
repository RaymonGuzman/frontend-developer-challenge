import React from 'react';
import logo from './logo.svg';
import './App.css';
import Center from './components/Center';
import Prueba from './components/Prueba';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Center} />
        <Route exact path="/prueba" component={Prueba} />
      </Switch>
    </Router>
  //  <Center />
  ); 
}

export default App;
