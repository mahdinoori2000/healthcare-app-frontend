import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { signUpAsync } from '../../redux/user/userSlice';
import register from './register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const MINIMUM_PASSWORD_LENGTH = 6;

  const { signError, success } = useSelector((store) => store.user);
  const [errors, setErrors] = useState('');
  const [mismatch, setMismatch] = useState('');
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const passwordConfirmation = formData.get('password_confirmation');

    if (password.length < MINIMUM_PASSWORD_LENGTH) {
      setErrors(`Password must be at least ${MINIMUM_PASSWORD_LENGTH} characters!`);
      return;
    }

    if (password !== passwordConfirmation) {
      setMismatch('Passwords do not match');
      return;
    }

    setErrors('');
    setMismatch('');

    const data = {
      user: {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
    };

    dispatch(signUpAsync(data)).then((result) => {
      if (result && result.error) return;
      navigate('/login');
    });
  };

  return (
    <section className={register.container}>
      {signError && <span>{signError}</span>}
      {errors && <span>{errors}</span>}
      <div>
        <h2>Sign Up</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
          <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            placeholder="Password confirmation"
            required
          />
          <div>
            <button type="submit">
              Sign Up
            </button>
            <NavLink to="/login">
              <button type="button">Log in</button>
            </NavLink>
          </div>
          <p>{mismatch}</p>
          <p>{success}</p>
        </form>
      </div>
    </section>
  );
};

export default Register;
