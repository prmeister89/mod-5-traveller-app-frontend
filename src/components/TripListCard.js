import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class TripListCard extends Component {



  render() {
    return (
      <div className='ui card'>
        <div className='content'>
          <h1>{this.props.trip.location}</h1>
          <p>Insert Image Here</p>
          <h3>Dates</h3>
          <li>{this.props.trip.startDateConverted} - {this.props.trip.endDateConverted}</li>
          <br></br>

          <NavLink className='item' to={`/trips/${this.props.trip.id}`}>
            <button className='ui blue floated right floated button'>View Details</button>
          </NavLink>

        </div>
      </div>
    )
  }
}

export default withRouter(TripListCard);
