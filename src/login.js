import React from 'react';
import fireApp from './fire';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const [user, loading, error] = useAuthState(fireApp.auth());
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log('data: ', data);
    login(data.Email, data.Password);
  };

  const login = (email, pass) => {
    fireApp.auth().signInWithEmailAndPassword(email, pass);
  };

  const logout = () => {
    fireApp.auth().signOut();
  };

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (user) {
    return (
      <div>
        <p>Current User: {user.email}</p>
        <button onClick={logout}>Log out</button>
      </div>
    );
  }

  console.log('errors: ', errors);

  return (
    <div>
      <div>
        <img src="FP.png" />
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            name="Email"
            ref={register({
              required: { value: true, message: 'Email is required' },
            })}
          />
          <input
            type="password"
            placeholder="Password"
            name="Password"
            ref={register({
              required: { value: true, message: 'Password is required' },
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />

          <button type="submit">Login</button>
        </form>
        <Link to={`register`}>
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
