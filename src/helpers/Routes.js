import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import About from '../Views/About';
import Projects from '../Views/Projects';
import Technologies from '../Views/Technologies';
import NotFound from '../Views/NotFound';
import Home from '../Views/Home';
import Contact from '../Views/Contact';
import EditAbout from '../Views/EditAbout';
import EditProjects from '../Views/EditProjects';
import EditTech from '../Views/EditTech';
import EditContact from '../Views/EditContact';

// The PrivateRoute function is creating a private route and returing the specified route based on the props
// We specify the specific props we want to use in the routeChecker and pass the rest with the spread
const AdminRoute = ({ component: Component, user, ...rest }) => {
  // when we call this function in the return, it is looking for an argument. `props` here is taco.
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
    // this render method is one we can use instead of component. Since the components are being dynamically created, we use render. Read the docs for more info: https://reactrouter.com/web/api/Route/render-func
  // Just like in the routes if we want the dynamically rendered component to have access to the Router props, we have to pass `props` as an argument.
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

AdminRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

export default function Routes({ projects }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/about'
          component={About}
        />
        <Route
          exact
          path='/projects'
          component={() => <Projects projects={projects}/>}
        />
        <Route
          exact
          path='/technologies'
          component={() => <Technologies/>}
        />
        <Route
          exact
          path='/contact'
          component={() => <Contact/>}
        />
        <AdminRoute
          exact
          path='/editabout'
          component={() => <EditAbout/>}
        />
        <AdminRoute
          exact
          path='/editprojects'
          component={() => <EditProjects/>}
        />
        <AdminRoute
          exact
          path='/edittech'
          component={() => <EditTech/>}
        />
        <AdminRoute
          exact
          path='/editcontact'
          component={() => <EditContact/>}
        />
        <Route path='*' component={NotFound}/>
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  projects: PropTypes.array
};
