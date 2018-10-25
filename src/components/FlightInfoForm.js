import React, { Component } from 'react';
import { NavLink, withRouter,  } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFlightInfo } from '../redux/actions';
import NumPad from 'react-numpad';

class FlightInfoForm extends Component {
  state = {
    trip_id: parseInt(this.props.tripId),
    from: "",
    to: "",
    flightNumber: "",
    departure: "",
    gate: "",
    boardingGroup: "",
    seat: ""
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const newFlightInfo = this.state;
    console.log(newFlightInfo)

    const tripId = parseInt(this.props.tripId)

    this.props.addFlightInfo(newFlightInfo);
    this.props.history.push("/trips/" + tripId + "/flight-info");
    e.target.reset();
  }
  render() {
    return (
      <div>
        <form className='ui form' onSubmit={this.handleOnSubmit}>
          <div className='ui horizontal segments'>
            <div className='ui segment'>
              <h4 className='ui left floated header'>
              Add Flight Details
              </h4>
              <button className='ui right floated green basic button' type='submit' >Add</button>
            </div>
          </div>
          <div className='field'>
            <div className='two fields'>
              <div className='field'>
                <label>From</label>
                <input type='text' value={this.state.from} onChange={e => this.setState({ from: e.target.value })}/>
              </div>
              <div className='field'>
                <label>To</label>
                <input type='text'value={this.state.to} onChange={e => this.setState({ to: e.target.value })}/>
              </div>
            </div>
          </div>
          <div className='field'>
            <div className='two fields'>
              <div className='field'>
                <label>Flight Number</label>
                <input type='text' value={this.state.flightNumber} onChange={e => this.setState({ flightNumber: e.target.value })}/>
              </div>
              <div className='field'>
                <NumPad.Time
                  onChange={e => this.setState({ departure: e })}
                  value={this.state.departure}
                  position='center'
                  label={'Departure'}
                  placeholder={'--:--'}
                />
              </div>
            </div>
          </div>
          <div className='field'>
            <div className='three fields'>
              <div className='five wide field'>
                <label>Gate</label>
                <input type='text' value={this.state.gate} onChange={e => this.setState({ gate: e.target.value })}/>
              </div>
              <div className='five wide field'>
                <label>Boarding Group</label>
                <input type='text' maxlength='3' value={this.state.boardingGroup} onChange={e => this.setState({ boardingGroup: e.target.value })}/>
              </div>
              <div className='five wide field'>
                <label>Seat</label>
                <input type='text' maxlength='3' value={this.state.seat} onChange={e => this.setState({ seat: e.target.value })}/>
              </div>
            </div>
          </div>
        </form>

        <div className='ui placeholder segment'>
          <div className='ui icon header'>
            <i className='id card icon'></i>
            No Plane Ticket Currently Displayed
          </div>
          <button className='ui primary button'>
          Add Ticket
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log(state)
  return {
    specificTrip: state.specificTrip
  }
}

export default withRouter(connect(mapStateToProps, { addFlightInfo  })(FlightInfoForm));
