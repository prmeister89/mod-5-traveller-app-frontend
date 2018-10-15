import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateTrip } from '../redux/actions';

class TripDetailForm extends Component {
  state = {};

  static getDerivedStateFromProps(props, state) {
    if (props.trip && props.trip.id !== state.id) {
      return {
        id: props.trip.id,
        location: props.trip.location,
        startDate: props.trip.startDate,
        endDate: props.trip.endDate,
        notes: props.trip.notes
      };
    }
    return null;
  }

  onSave = e => {
    e.preventDefault();
    let payload = {
      location: this.state.location,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      notes: this.state.notes
    };
    this.props.updateTripInfo({
      tripId: this.props.trip.id,
      payload
    });
    this.props.history.push("/trips/" + this.props.trip.id);
  };

  render() {
    if (!this.props.trip) {
      return (
        <div className='ui segment'>
          <div className='ui active dimmer'>
            <div className='ui text loader'>
            Loading Trip...
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <form className='ui form' onSubmit={this.onSave}>
          <div>
            <label>Location:</label>
            <input
              className='ui field'
              type='text'
              name='location'
              value={this.state.location}
              onChange={e => this.setState({ location: e.target.value })}
            />
          </div>
          <div>
            <label>From:</label>
            <input
              className='ui field'
              placeholder='DD-MM-YYYY'
              type='text'
              name='startDate'
              value={this.state.startDate}
              onChange={e => this.setState({ startDate: e.target.value })}
            />
            <label>To:</label>
            <input
              className='ui field'
              placeholder='DD-MM-YYYY'
              type='text'
              name='endDate'
              value={this.state.endDate}
              onChange={e => this.setState({ endDate: e.target.value })}
            />
          </div>
          <div>
            <label>Notes:</label>
            <input
            className='ui field'
            type='text'
            name='notes'
            value={this.state.notes}
            onChange={e => this.setState({ notes: e.target.value })}
            />
          </div>
          <Link to={`/trips/${this.props.trip.id}`}>
            <button className='ui button' type='button'>Cancel</button>
          </Link>
          <button className='ui button' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  let trip = state.trips.find(t => t.id === Number(props.tripId))
  return {
    trip: trip
  }
}

export default connect(mapStateToProps, { updateTripInfo: updateTrip })(withRouter(TripDetailForm));
