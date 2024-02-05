import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Doctors</NavLink>
      <NavLink to="/book-appointment">Book Appointment</NavLink>
      <NavLink to="/my-appointments">My Appointments</NavLink>
      <NavLink to="/add-doctor">Add Doctor</NavLink>
      <NavLink to="/delete-doctor">Delete Doctor</NavLink>
      <button type="button">Log Out</button>
    </nav>
  );
}
export default Navbar;
