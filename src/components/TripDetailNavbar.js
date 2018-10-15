import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const TripDetailNavbar = props => {
  return (
    <div className='ui top attached tabular menu'>
      <NavLink exact to={`/trips/${props.id}/luggage`}>
        <a className='item active'>Luggage</a>
      </NavLink>
      <NavLink exact to={`/trips/${props.id}/flight-info`}>
        <a className='item'>Flight Information</a>
      </NavLink>
      <NavLink exact to={`/trips/${props.id}/transportation`}>
        <a className='item'>Transportation Information</a>
      </NavLink>
      <NavLink exact to={`/trips/${props.id}/arrival`}>
        <a className='item'>Arrival</a>
      </NavLink>
    </div>
  );
};

const TripDetailNavBarWithRouter = withRouter(TripDetailNavbar);

export default TripDetailNavBarWithRouter;
