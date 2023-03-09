import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/main">main</NavLink>
        </li>
        <li>
          <NavLink to="/reservations">reservations</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
