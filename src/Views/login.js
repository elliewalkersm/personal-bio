import React from 'react';
import { Button } from 'reactstrap';
import { signInUser } from '../helpers/auth';

function Login() {
  return (
    <div>
      <Button color='info' onClick={signInUser}>Sign In</Button>
    </div>
  );
}

export default Login;
