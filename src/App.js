
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './Components/Form'
import FormSuccess from './Components/FormSuccess';

export default function App() {
  return (
    <Router className="App">
      <div className="home-contain">
        <Switch>
          <Route path='/jones-form' exact component={Form}/>
          <Route path='/form-success' exact component={FormSuccess}/>
        </Switch>
      </div>
    </Router>
  );
};
