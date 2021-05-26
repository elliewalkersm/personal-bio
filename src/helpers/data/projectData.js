import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addProject = (project) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/projects.json`, project)
    .then((response) => {
      const body = { id: response.data.name };
      axios.patch(`${dbURL}/projects/${response.data.name}.json`, body)
        .then(() => {
          getProjects().then((projectArray) => resolve(projectArray));
        });
    })
    .catch((error) => reject(error));
});

const updateProject = (projects) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/projects/${projects.firebaseKey}.json`, projects)
    .then(() => getProjects().then(resolve))
    .catch((error) => reject(error));
});

const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/projects/${firebaseKey}.json`)
    .then(() => getProjects().then((response) => resolve(response)))
    .catch((error) => reject(error));
});

export {
  getProjects,
  addProject,
  updateProject,
  deleteProject
};
