import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTrip } from '../redux/actions';



class TripListCard extends Component {

  handleOnDelete = (tripId) => {
    const tripCardId = this.props.trip.id
    console.log("tripId:", tripId)

    this.props.deleteTrip(tripId);
    this.props.history.push('/trips');
  }

  render() {
    return (
      <div className='ui card'>
        <div className='content'>
        <NavLink to={`/trips`}>
          <button className='ui inverted right floated icon button' tripId={this.props.trip.id} onClick={e => this.handleOnDelete(this.props.trip.id)}>
            <i className='red remove icon' />
          </button>
        </NavLink>
        <br></br>
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

export default withRouter(connect(null, { deleteTrip })(TripListCard));
