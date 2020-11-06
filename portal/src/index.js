import React from 'react';
import ReactDOM from 'react-dom';

//Routes usefull libs or files
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import * as ROUTES from "./routes";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//Components that'll be routed from index when some URI have been searched
import Home from './areas/Home/Home';
import SeePublications from './areas/SeePublications/SeePublications';
import WritePublications from './areas/WritePublications/WritePublications';
import PageNotFound from './areas/PageNotFound/PageNotFound';


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.READ_POSTS} component={SeePublications} />
      <Route path={ROUTES.WRITE_POST} component={WritePublications} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>,
document.getElementById('root'));