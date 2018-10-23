import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FlightInfoForm from './FlightInfoForm'
import { fetchSpecificTripFlightInfoList, deleteFlightInfo } from '../redux/actions';


class FlightInfoList extends Component {
  state = {};

  handleOnDelete = (flightId) => {
    const tripId = this.props.specificTrip.id
    console.log("flightId:", flightId)
    console.log("tripId:", tripId)

    this.props.deleteFlightInfo(flightId, tripId);
    this.props.history.push(`/trips/${tripId}/flight-info`);
  }

  render() {
    if (!this.props.specificTrip.flights) {
      return (
        <div className='ui segment'>
          <div className='ui active dimmer'>
            <div className='ui text loader'>
              Loading Flights List...
            </div>
          </div>
        </div>
      )
    }

    const trip = this.props.specificTrip;
    return (
      <div className='ui two stackable cards'>
        {trip.flights.map(flight => (
          <div id={flight.id} className='ui fluid inverted blue card'>
            <div className='content'>
            <NavLink to={`/trips/${this.props.specificTrip.id}/flight-info`}>
              <button className='ui inverted right floated icon button' flightId={flight.id} onClick={e => this.handleOnDelete(flight.id)}>
                <i className='red remove icon' />
              </button>
            </NavLink>
            <h4 className='ui blue dividing header'>Destination</h4>
            <div className='ui horizontal segments'>
              <div className='ui blue inverted segment'>From:
                <p>{flight.from}</p>
              </div>
              <div className='ui blue inverted segment'>To:
                <p>{flight.to}</p>
              </div>
            </div>

            <h4 className='ui blue dividing header'>Flight</h4>
            <table className='ui definition table'>
              <tbody>
                <tr>
                  <td className='two wide column'>Flight</td>
                  <td>{flight.flightNumber}</td>
                </tr>
                <tr>
                  <td>Departs</td>
                  <td>{flight.departure}</td>
                </tr>
                <tr>
                  <td>Gate</td>
                  <td>{flight.gate}</td>
                </tr>
                <tr>
                  <td>Boarding Group</td>
                  <td>{flight.boardingGroup}</td>
                </tr>
                <tr>
                  <td>Seat</td>
                  <td>{flight.seat}</td>
                </tr>
              </tbody>
            </table>

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

export default withRouter(connect(mapStateToProps, { fetchSpecificTripFlightInfoList, deleteFlightInfo })(FlightInfoList));
