import React from 'react';
import ReactDOM from 'react-dom';

//Routes usefull libs or files
import { BrowserRouter as Router, Route } from 'react-router-dom';  
import * as ROUTES from "./routes";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//Components that'll be routed from index when some URI have been searched
import Home from './components/Home/Home';
import SeePublications from './components/SeePublications/SeePublications';
import WritePublications from './components/WritePublications/WritePublications';


ReactDOM.render(
  <Router>
    <Route exact path={ROUTES.HOME} component={Home} />
    <Route path={ROUTES.READ_POSTS} component={SeePublications} />
    <Route path={ROUTES.WRITE_POST} component={WritePublications} />
  </Router>,
  document.getElementById('root')
);