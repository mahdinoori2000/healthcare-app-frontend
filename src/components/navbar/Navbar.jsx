import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { logout } from '../../redux/user/userSlice';
import './navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutUser = () => {
    dispatch(logout());
    Cookies.remove('jwt_token');
    Cookies.remove('user_info');
    navigate('/');
  };
  return (

    <nav className="nav-container">
      <div className="profile">
        <p>Mayito Ismail</p>
      </div>
      <div className="nav-links">
        <NavLink to="/">Doctors</NavLink>
        <NavLink to="/book-appointment">Book Appointment</NavLink>
        <NavLink to="/doctors/my-appointments">My Appointments</NavLink>
        <NavLink to="/add-doctor">Add Doctor</NavLink>
        <NavLink to="/delete-doctor">Delete Doctor</NavLink>
      </div>
      <button
        onClick={logoutUser}
        type="button"
      >
        Logout
      </button>
    </nav>
  );
};
export default Navbar;
