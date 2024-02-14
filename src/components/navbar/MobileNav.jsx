import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import logoWhite from '../../assets/logo.png';
import MobileNavItems from './MobileNavItems';
import navbar from './navbar.module.css';

export default function MobileNav() {
  const location = useLocation();
  const [openNav, setOpenNav] = useState(false);

  const handleItemClick = () => {
    setOpenNav(false);
  };

  return (
    <div className="relative mb-14 bg-white">
      <div
        className={`fixed top-0 left-0 z-50  h-[56px] w-full bg-${
          openNav ? 'green-primary-color' : '[#fff] shadow-md z-50'
        } flex items-center justify-between px-4`}
      >
        <button
          type="button"
          onClick={() => setOpenNav(!openNav)}
          className=" left-5 top-5 z-500"
        >
          {openNav ? (
            <AiOutlineClose
              style={{ width: '2rem', height: '2rem', color: 'white' }}
            />
          ) : (
            <GiHamburgerMenu style={{ width: '2rem', height: '2rem' }} />
          )}
        </button>
        {!openNav && (
          <div className="top-0 right-4 transition-transform ease-in-out bg-white duration-500">
            <div className="w-20">
              <img src={logoWhite} alt="Logo" />
            </div>
          </div>
        )}
      </div>

      <div
        className={`fixed right-5 top-5 z-${
          openNav ? '50' : '-1'
        } h-7 focus:outline-none text-[18px] text-white-400 cursor-pointer bg-white px-2 w-32 `}
        style={{ display: openNav ? 'block' : 'none' }}
      >
        <img src={logoWhite} alt="Logo" />
      </div>

      <div
        className={`${
          openNav ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 z-40 w-[100%] h-screen bg-green-primary-color text-white transition-transform ease-in-out duration-500`}
      >
        <ul className="h-full flex flex-col items-center justify-center gap-1 text-black">
          <MobileNavItems
            path="/doctors"
            name="Doctors"
            onClick={handleItemClick}
            className={`${location.pathname === '/doctors' ? navbar.active : ''}`}
          />
          <MobileNavItems
            path="/doctors/book-appointment"
            name="Book Appointment"
            onClick={handleItemClick}
            className={`${location.pathname === '/doctors/book-appointment' ? navbar.active : ''}`}
          />
          <MobileNavItems
            path="/doctors/my-appointments"
            name="My Appointments"
            onClick={handleItemClick}
            className={`${location.pathname === '/doctors/my-appointments' ? navbar.active : ''}`}
          />
          <MobileNavItems
            path="/doctors/add-doctor"
            name="Add Doctor"
            onClick={handleItemClick}
            className={`${location.pathname === '/doctors/add-doctor' ? navbar.active : ''}`}
          />
          <MobileNavItems
            path="/doctors/delete-doctor"
            name="Delete Doctor"
            onClick={handleItemClick}
            className={`${location.pathname === '/doctors/delete-doctor' ? navbar.active : ''}`}
          />
        </ul>
      </div>
    </div>
  );
}
