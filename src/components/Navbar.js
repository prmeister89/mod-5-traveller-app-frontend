import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = props => {

  return (
    <div className='ui fluid horizontal inverted blue menu'>
      <Link to="/" className='fluid item'>
        <h3 className='ui inverted header'>
          <i className='wpexplorer icon'></i>
          <div className='content'>
          Traveller
          <div className='inverted sub header'>Stress Less, Travel More</div>
          </div>
        </h3>
      </Link>
      <NavLink exact to="/trips" className='active item'>
        My Trips
      </NavLink>
      <div className='fluid right menu'>
        <div className='item'>
          Signed-In as: Peter M. <i className="dropdown icon"></i>
        </div>
        <NavLink className='item' to={`/login`}>
          Logout <i className="blind icon"></i>
        </NavLink>
      </div>
    </div>
  );
};

const NavBarWithRouter = withRouter(Navbar);

export default NavBarWithRouter;
