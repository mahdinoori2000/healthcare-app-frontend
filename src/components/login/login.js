import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginAsync } from '../../redux/user/userSlice';
import logo from '../../assets/logo.png';

function Login() {
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
    <section className="g-6 flex flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 h-[100vh]">
      <div className="w-full">
        <div className="block rounded-lg bg-white">
          <div className="px-4 md:px-0 md:w-6/12 m-auto">
            <div className="p-6 md:mx-6 md:p-12">
              {/* <!--Logo--> */}
              <div className="text-center mb-4">
                <img
                  className="mx-auto w-48"
                  src={logo}
                  alt="logo"
                />
              </div>

              <form onSubmit={handleSubmit} ref={formRef}>
                <p className="mb-4">Please login to your account</p>
                {/* <!--Username input--> */}
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

                {/* <!--Password input--> */}
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

                {/* <!--Submit button--> */}
                <div className="mb-12 pb-1 pt-1 text-center">
                  <button
                    className="bg-green-primary-color mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                    type="submit"
                  >
                    Log in
                  </button>
                </div>

                {/* <!--Register button--> */}
                <div className="flex items-center justify-between pb-6">
                  <p className="mb-0 mr-2">Don&apos;t have an account?</p>
                  <NavLink to="/signup">

                    <button
                      type="button"
                      className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    >
                      Register
                    </button>
                  </NavLink>
                  {loginError && <p className="d-block">{loginError}</p>}
                  {success && <p className="d-block">{success}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Login;
