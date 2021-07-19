
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './Components/Form'
import FormSuccess from './Components/FormSuccess';

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path='/' component={Form}/>
        <Route path='/FormSuccess' component={FormSuccess}/>
      </Switch>
    </Router>
  );
};

export default App;
