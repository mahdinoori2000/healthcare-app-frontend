import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Splash.module.css';

function SplashScreen() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Healthcare App</h1>
        <div>
          <NavLink to="login">
            <button type="button">Log in</button>
          </NavLink>
          <NavLink to="signup">
            <button type="button">Sign up</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
