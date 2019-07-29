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



import './sass/App.scss';



function App() {
  return (
    <Router>
      <div id="App">
        <Nav />
        <Switch>
          <Route tag={RRLink} exact path="/" component={Main} />
          <Route tag={RRLink} exact path="/main" component={Main} />
          <Route tag={RRLink} exact path="/servises" component={Servises} />
          <Route tag={RRLink} exact path="/bussines" component={Bussines} />
          <Route tag={RRLink} exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;