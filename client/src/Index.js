import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Users from './Components/Users.jsx';
import Contact from './Components/Contact.jsx';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Images from './Components/Images.jsx';
import Nav from './Components/Nav.jsx';

const routing = (
    
    <Router>
        <div>
        <Nav/>
        <Route exact path="/" component={App}/>
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        </div>
    </Router>
  )
  
render(routing, document.getElementById('root'));
