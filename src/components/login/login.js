import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginAsync } from '../../redux/user/userSlice';
import login from './login.module.css';

const Login = () => {
  const { loginError, success } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const email = formData.get('email');
    const password = formData.get('password');

    const data = {
      user: { email, password },
    };

    try {
      await dispatch(loginAsync(data));
      navigate('/doctors');
      e.target.reset();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <section className={login.container}>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} ref={formRef}>
          <input
            type="email"
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
          <div>
            <button type="submit">
              Log in
            </button>
            <NavLink to="/signup">
              <button type="button">Sign Up</button>
            </NavLink>
          </div>
          {loginError && <p>{loginError}</p>}
          {success && <p>{success}</p>}
        </form>
      </div>
    </section>
  );
};

export default Login;
