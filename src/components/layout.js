import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';

const Layout = () => (
  <div className="container-fluid">
    <div className="row main-page">
      <div>
        <Navbar />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  </div>
);

export default Layout;
