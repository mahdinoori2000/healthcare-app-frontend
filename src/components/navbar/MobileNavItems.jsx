import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function MobileNavItems({
  path, name, onClick, className,
}) {
  return (
    <li>
      <NavLink
        to={path}
        className={`${className} hover:bg-primary-blue-700-90 active:bg-white text-white-400 w-72 h-16 rounded-2xl flex items-center justify-center text-xl`}
        onClick={onClick}
      >
        <span>{name}</span>
      </NavLink>
    </li>
  );
}

MobileNavItems.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
export default MobileNavItems;
