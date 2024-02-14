import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { logout } from '../../redux/user/userSlice';
import logo from '../../assets/logo.png';
import navbar from './navbar.module.css';

function DesktopNavbar() {
  const { userData } = useSelector((store) => store.user);
  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutUser = () => {
    dispatch(logout());
    Cookies.remove('jwt_token');
    Cookies.remove('user_info');
    navigate('/');
  };
  return (
    <nav className={navbar.nav_container}>
      <div className={navbar.profile}>
        <img src={logo} alt="Logo" className={navbar.logo} />
        {userData && userData.user && <p>{`Welcome "${userData.user.name}"`}</p>}
      </div>
      <div className={navbar.nav_links}>
        <NavLink to="/doctors" className={location.pathname === '/doctors' ? navbar.active : ''}>Doctors</NavLink>
        <NavLink to="/doctors/book-appointment" className={location.pathname === '/doctors/book-appointment' ? navbar.active : ''}>Book Appointment</NavLink>
        <NavLink to="/doctors/my-appointments" className={location.pathname === '/doctors/my-appointments' ? navbar.active : ''}>My Appointments</NavLink>
        <NavLink to="/doctors/add-doctor" className={location.pathname === '/doctors/add-doctor' ? navbar.active : ''}>Add Doctor</NavLink>
        <NavLink to="/doctors/delete-doctor" className={location.pathname === '/doctors/delete-doctor' ? navbar.active : ''}>Delete Doctor</NavLink>
      </div>
      <button
        className={navbar.logout}
        onClick={logoutUser}
        type="button"
      >
        Logout
      </button>
      <div>
        <ul className={navbar.social_links}>
          <li>
            <img src="https://jade-rabanadas-479b96.netlify.app/static/media/fb.6ede2e0d2f244fec1b76327b30e2d180.svg" alt="" />
          </li>
          <li>
            <img src="https://jade-rabanadas-479b96.netlify.app/static/media/x.068f9efee7b52e070424b4c2925f2960.svg" alt="" />
          </li>
          <li>
            <img src="https://jade-rabanadas-479b96.netlify.app/static/media/google.cf737c214060d873db8410bbd35aa463.svg" alt="" />
          </li>
          <li>
            <img src="https://jade-rabanadas-479b96.netlify.app/static/media/linkedin.6bfb62956b5c794df40ab6045a56d21d.svg" alt="" />
          </li>
        </ul>
        <p className={navbar.copyright}>@2024 Health Care App</p>
      </div>
    </nav>
  );
}
export default DesktopNavbar;
