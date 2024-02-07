import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { logout } from '../../redux/user/userSlice';
import './navbar.css';

const Navbar = () => {
  const { userData } = useSelector((store) => store.user);

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
        <p>{`Welcome ${userData.user.name}`}</p>
      </div>
      <div className="nav-links">
        <NavLink to="/doctors">Doctors</NavLink>
        <NavLink to="/doctors/book-appointment">Book Appointment</NavLink>
        <NavLink to="/doctors/my-appointments">My Appointments</NavLink>
        <NavLink to="/doctors/add-doctor">Add Doctor</NavLink>
        <NavLink to="/doctors/delete-doctor">Delete Doctor</NavLink>
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
