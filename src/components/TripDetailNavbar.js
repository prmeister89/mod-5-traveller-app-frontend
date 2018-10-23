import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class TripDetailNavbar extends Component {
  state = {
    className: ""
  };

  handleOnClick = (e, { name }) => this.setState({ className: "active item" })

  render() {
    const tripId = this.props.match.params.tripId
    const { className } = this.state
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
    )
  }
};

export default withRouter(TripDetailNavbar);
