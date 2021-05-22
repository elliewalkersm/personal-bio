import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import About from '../Views/About';
import Projects from '../Views/Projects';
import Technologies from '../Views/Technologies';
import NotFound from '../Views/NotFound';
import Home from '../Views/Home';
import Contact from '../Views/Contact';

export default function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/about'
          user={user}
          component={About}
        />
        <Route
          exact
          path='/projects'
          user={user}
          component={Projects}
        />
        <Route
          exact
          path='/technologies'
          user={user}
          component={Technologies}
        />
        <Route
          exact
          path='/contact'
          user={user}
          component={Contact}
        />
        <Route path='*' component={NotFound}/>
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any
};
