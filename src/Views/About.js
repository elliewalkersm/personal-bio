import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="wrapper">
    <div className="about-container">
      <h1>Alitte About Me</h1>
      <Jumbotron className="about-content">
        <img
          className="about-img p-2"
          src="https://lh3.googleusercontent.com/a-/AOh14GhIRWbuEnNPWW304eod4cmGXjWRDJGG7TppO0t_Uw=s192-c-rg-br100"
          style={{ float: 'left' }}/>
        <p className="about-me-bio">
          Hey there! My name is Ellie and I am new to the software world. I come from the theater world were I was previously working
          as a stage manager. When my industry was shutdown in spring of 2020, I was completely lost on what I would do for work. I made the decision to
          signup for a 3 week bootcamp at the Nashville Software School in the fall of 2020, thinking it would just
          be something fun to learn during qurantine. Once I finished the bootcamp I was hooked! I applied for the year long
          evening cohort and I am now finishing up the frontend portion. I have learned so much in the past 6 months and I am
          truly thankful for the Nashville Software School. Take a look around my site and checkout some projects I have been
          working on. I am always looking for new connections, so send me an email and introduce yourself. I would love to meet you!
        </p>
      </Jumbotron>
    </div>
    <Link to="/login">Admin</Link>
    </div>
  );
}
