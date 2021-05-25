import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import NavBar from '../Components/NavBar';
import Routes from '../helpers/Routes';
import firebaseConfig from '../helpers/data/apiKeys';
import getProjects from '../helpers/data/projectData';

firebase.initializeApp(firebaseConfig);

function App() {
  const [projects, setProjects] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
        console.warn(process.env.REACT_APP_ADMIN_UID, authed.uid, admin);
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
        <NavBar/>
        <Routes
        projects={projects}
        setProjects={setProjects}
        admin={admin}/>
      </Router>
    </>
  );
}

export default App;
