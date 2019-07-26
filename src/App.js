import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink as RRLink,
  Switch
} from "react-router-dom";
import About from './components/About';
import News from './components/News';
import Main from './components/Main';
import Nav from './components/Nav';
import Contact from './components/Contact';



import './sass/App.scss';



function App() {
  return (
    <Router>
      <div id="page">
        <Nav/>
        <Switch>
        <Route tag={RRLink} path="/main" component={Main} />
       <Route  tag={RRLink} path="/about" component={About} />
       <Route tag={RRLink} path="/news" component={News} />
       <Route tag={RRLink} path="/contact" component={Contact} />
       </Switch>
      </div>
    </Router>
    
  );
}

export default App;
