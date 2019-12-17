import React from 'react';
import './App.css';
import Homescreen from './Screens/Homescreen/Homescreen';
import LandingScreen from './Screens/LandingScreen/LandingScreen';
import { 
  Route, 
  BrowserRouter as Router,
  Link,
  Switch 
  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/" component={LandingScreen} />
                <Route path="/home" component={Homescreen} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
