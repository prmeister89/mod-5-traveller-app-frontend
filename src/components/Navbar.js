import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = props => {
  return (
    <div className='ui inverted blue menu'>
      <Link to="/" className='item'>
        <h2 className='ui header'>
          <i className='wpexplorer icon'></i>
          <div className='content'>
          Traveller
          <div className='sub header'>Stress Less, Travel More</div>
          </div>
        </h2>
      </Link>
      <NavLink exact to="/trips" activeClassName='active item' className='item'>
      <h3 className='ui header'>My Trips</h3>
      </NavLink>
    </div>
  );
};

const NavBarWithRouter = withRouter(Navbar);

export default NavBarWithRouter;
