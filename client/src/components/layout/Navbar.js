import React, { useContext } from 'react';
import { AuthContext } from '../../App';
import { LOGOUT } from '../../reducers/action-types';

import { Link } from 'react-router-dom';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import './Navbar.scss';

const Navbar = () => {
  const { state, dispatch } = useContext(AuthContext);

  const guestLink = (
    <ul>
      <li>
        <Link to='/about'>About</Link>
      </li>
      {/* <li>
        <Link to='/register'>Sign Up</Link>
      </li> */}
      <li>
        <Link to='/login'>Sign In</Link>
      </li>
    </ul>
  );

  const authLink = (
    <ul>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/register'>Profile</Link>
      </li>
      <li>
        <Link to='/' onClick={() => dispatch({ type: LOGOUT })}>
          Sign Out
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className='navbar bg-dark'>
      <div className='logo'>
        <h1>
          <Link to='/'>Access for You</Link>
        </h1>
        <PersonPinIcon fontSize='large' style={{ paddingBottom: 10 }} />
      </div>
      {state.isAuthenticated ? authLink : guestLink}
    </nav>
  );
};

export default Navbar;
