import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import layout from './layout.module.css';

const Layout = () => (
  <div className={layout.container}>
    <div>
      <Navbar />
    </div>
    <div>
      <Outlet />
    </div>
  </div>
);

export default Layout;
