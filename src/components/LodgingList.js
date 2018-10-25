import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import LodgingForm from './LodgingForm'
import { fetchSpecificTripLodgingList, deleteLodging } from '../redux/actions';


class LodgingList extends Component {
  state = {};

  handleOnDelete = (lodgingId) => {
    const tripId = this.props.specificTrip.id
    console.log("lodgingId:", lodgingId)
    console.log("tripId:", tripId)

    this.props.deleteLodging(lodgingId, tripId);
    this.props.history.push(`/trips/${tripId}/lodging`);
  }

  render() {
    if (!this.props.specificTrip.lodgings) {
      return (
        <div className='ui segment'>
          <div className='ui active dimmer'>
            <div className='ui text loader'>
              Loading Lodging List...
            </div>
          </div>
        </div>
      )
    }

    const trip = this.props.specificTrip;

    return (
      <div className='ui two stackable cards'>
        {trip.lodgings.map(lodging => (
          <div id={lodging.id} className='ui fluid inverted blue card'>
            <div className='content'>
            <NavLink to={`/trips/${this.props.specificTrip.id}/lodging`}>
              <button className='ui inverted right floated icon button' lodgingId={lodging.id} onClick={e => this.handleOnDelete(lodging.id)}>
                <i className='red remove icon' />
              </button>
            </NavLink>
            <h4 className='ui blue dividing header'>Where You're Staying</h4>
            <div className='ui horizontal segment'>
            {lodging.name}
            </div>

            <h4 className='ui blue dividing header'>Address</h4>
            <div className='ui horizontal segment'>
            {lodging.address}
            </div>

            <div className='ui horizontal segments'>
              <div className='ui clearing segment'>
                <h4 className='ui blue dividing header'>Check-In</h4>
                <div className='ui blue segment'>{lodging.checkin}</div>
              </div>
              <div className='ui clearing segment'>
                <h4 className='ui blue dividing header'>Check-Out</h4>
                <div className='ui blue segment'>{lodging.checkout}</div>
              </div>
            </div>

            <h4 className='ui blue dividing header'>Additional Info</h4>
            <div className='ui horizontal segment'>
            {lodging.info}
            </div>

            <h4 className='ui blue dividing header'></h4>
              <button className='fluid ui basic grey button'>Edit</button>
            </div>
          </div>
          ))}
        </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  // console.log(state)
  return {
    specificTrip: state.specificTrip
  }
}

export default withRouter(connect(mapStateToProps, { fetchSpecificTripLodgingList, deleteLodging })(LodgingList));
