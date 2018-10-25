import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class TripListCard extends Component {

  render() {
    return (
      <div className='ui card'>
        <div className='content'>
          <div className='ui segment'>
            <h1>{this.props.trip.location}</h1>
          </div>
          <div className='ui embed'>
            <iframe allowFullScreen='true' />
              <img className='ui fluid image' src={this.props.trip.url} />
          </div>

          <div className='ui horizontal segments'>
            <div className='ui segment'>
              <h3>From:</h3>
              <p>{this.props.trip.startDateConverted}</p>
            </div>
            <div className='ui segment'>
              <h3>To:</h3>
              <p>{this.props.trip.endDateConverted}</p>
            </div>
          </div>
          <NavLink className='item' to={`/trips/${this.props.trip.id}`}>
            <button className='ui blue floated right floated button'>View Details</button>
          </NavLink>

        </div>
      </div>
    )
  }
}

export default withRouter(TripListCard);
