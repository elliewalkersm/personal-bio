import React from 'react';
import { Button } from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

function Login() {
  return (
    <div>
      <Button color='info' onClick={signInUser}>Sign In</Button>
      <Button color='danger' onClick={signOutUser}>Sign Out</Button>
    </div>
  );
}

export default Login;
