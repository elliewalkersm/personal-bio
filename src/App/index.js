import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import NavBar from '../Components/NavBar';
import Routes from '../helpers/Routes';
import { getProjects } from '../helpers/data/projectData';

function App() {
  const [projects, setProjects] = useState([]);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
      } else if (admin || admin === null) {
        setAdmin(false);
      }
    });
  }, []);

  useEffect(() => {
    getProjects().then((response) => setProjects(response));
  }, []);

  return (
    <>
      <Router>
        <NavBar
        admin={admin}/>
        <Routes
        projects={projects}
        setProjects={setProjects}
        admin={admin}/>
      </Router>
    </>
  );
}

export default App;
