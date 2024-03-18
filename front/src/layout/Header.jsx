import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa'; // Import FaShoppingCart icon
import useAuth from '../hooks/useAuth';

const guestNav = [{ to: '/', icon: <FaUser /> }];

const userNav = [
  { to: '/', text: 'Home' },
  { to: '/pro', text: 'Add Product' },
  { to: '/cart', text: 'Cart', icon: <FaShoppingCart /> }, // Add cart navigation item
  { to: '/logout', text: 'Logout' },
];

export default function Header() {
  const { user, logout } = useAuth();
  const finalNav = user?.id ? userNav : guestNav;
  const navigate = useNavigate();

  const hdlLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-sky-400 border-gray-200 dark:bg-sky-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white uppercase">
            M-shop
          </span>
        </Link>

        <ul className="flex md:order-2 space-x-4">
          {finalNav.map((el, index) => (
            <li key={index}>
              {el.to === '/logout' ? (
                <button
                  onClick={hdlLogout}
                  className="flex items-center space-x-1 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {el.icon}
                  <span>{el.text}</span>
                </button>
              ) : (
                <Link
                  to={el.to}
                  className="flex items-center space-x-1 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {el.icon}
                  <span>{el.text}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
