import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink as RRLink,
  Switch
} from "react-router-dom";
import Servises from './components/Servises';
import Bussines from './components/Bussines';
import Main from './components/Main';
import Nav from './components/Nav';
import Contact from './components/Contact';
import NoMath from './components/no-match';



import './sass/App.scss';



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/"  exact component={Main} />
          <Route path="/servises"  component={Servises} />
          <Route path="/bussines"  component={Bussines} />
          <Route path="/contact"  component={Contact} />
          <Route component={NoMath}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;