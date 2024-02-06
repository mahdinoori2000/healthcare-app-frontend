import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <nav className="nav-container">
    <div className="profile">
      <p>Mayito Ismail</p>
    </div>
    <div className="nav-links">
      <NavLink to="/">Doctors</NavLink>
      <NavLink to="/book-appointment">Book Appointment</NavLink>
      <NavLink to="/my-appointments">My Appointments</NavLink>
      <NavLink to="/add-doctor">Add Doctor</NavLink>
      <NavLink to="/delete-doctor">Delete Doctor</NavLink>
    </div>
    <button type="button" className="logout">
      Log Out
    </button>
  </nav>
);
export default Navbar;
