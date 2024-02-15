import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { signUpAsync } from '../../redux/user/userSlice';
import logo from '../../assets/logo.png';
import img from '../../assets/bg1.jpg';

function Register() {
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
      setErrors(
        `Password must be at least ${MINIMUM_PASSWORD_LENGTH} characters!`,
      );
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
    <section
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex items-center justify-center flex-col gap-6 w-4/5 p-12 md:max-w-fit md:max-h-fit bg-white rounded-md">
        <div className="block rounded-lg bg-white">
          <div className="text-gray-500 font-bold text-1xl">
            <div className="p-6 md:mx-6 md:p-12">
              <div className="text-center mb-4">
                <img className="mx-auto w-48" src={logo} alt="logo" />
              </div>

              <form ref={formRef} onSubmit={handleSubmit}>
                <p className="mb-4">Please Sign up to create an account</p>
                <label htmlFor="name" className="block">
                  Name
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="mb-4 block w-full"
                    required
                  />
                </label>
                <label htmlFor="email" className="block">
                  Email
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="mb-4 block w-full"
                    required
                  />
                </label>

                <label htmlFor="password" className="block w-full">
                  Password
                  <input
                    type="password"
                    id="Password"
                    name="password"
                    placeholder="Enter your password"
                    className="mb-4 block w-full"
                    required
                  />
                </label>
                <label htmlFor="password_confirmation" className="block w-full">
                  Password confirmation
                  <input
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    placeholder="Password confirmation"
                    className="mb-4 block w-full"
                    required
                  />
                </label>

                <div className="mb-12 pb-1 pt-1 text-center">
                  <button
                    className="bg-green-primary-color mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                    type="submit"
                  >
                    Sign up
                  </button>
                </div>

                <div className="flex items-center justify-between pb-6">
                  <p className="mb-0 mr-2">Have already an account?</p>
                  <NavLink to="/login">
                    <button
                      type="button"
                      className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    >
                      Login
                    </button>
                  </NavLink>
                </div>
                {signError && <span className="d-block">{signError}</span>}
                {errors && <span className="d-block">{errors}</span>}
                <p className="d-block">{mismatch}</p>
                <p className="d-block">{success}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
