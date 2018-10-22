import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const TripDetailNavbar = props => {
  const tripId = props.match.params.tripId

  return (
    <div className='ui top attached tabular menu'>
      <NavLink exact to={`/trips/${ tripId }/luggage`}>
        <h4 className='active item'>Luggage</h4>
      </NavLink>

      <NavLink exact to={`/trips/${ tripId }/flight-info`}>
        <h4 className='item'>Flight Information</h4>
      </NavLink>

      <NavLink exact to={`/trips/${ tripId }/lodging`}>
        <h4 className='item'>Lodging</h4>
      </NavLink>
    </div>
  );
};

const TripDetailNavBarWithRouter = withRouter(TripDetailNavbar);

export default TripDetailNavBarWithRouter;
