import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import layout from './layout.module.css';

function Layout() {
  return (
    <div className={layout.container}>
      <div className={layout.navbar}>
        <Navbar />
      </div>
      <div className={layout.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
