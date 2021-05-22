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

  useEffect(() => {
    getProjects().then((response) => setProjects(response));
  }, []);

  return (
    <>
      <Router>
        <NavBar/>
        <Routes
        projects={projects}
        setProjects={setProjects}/>
      </Router>
    </>
  );
}

export default App;
