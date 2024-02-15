import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';

function Layout() {
  return (
    <div className="md:flex">
      <div className="md:w-[20%] text-md">
        <Navbar />
      </div>
      <div className="md:w-[85%]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
