import React from 'react';
import fireApp from './fire';
import { useForm } from 'react-hook-form';

export default function Register() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log('data: ', data);
    if (data.Password !== data.Confirm) {
      alert('Passwords must match');
    } else {
      fireApp.auth().createUserWithEmailAndPassword(data.Email, data.Password);
    }
  };
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
          <input
            type="password"
            placeholder="Confirm Password"
            name="Confirm"
            ref={register({
              required: { value: true, message: 'Password is required' },
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
