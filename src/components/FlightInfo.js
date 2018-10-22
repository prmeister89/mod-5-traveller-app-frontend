import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class FlightInfo extends Component {
  render() {
    return (
      <div>
        <form className='ui form'>
          <h4 className='ui dividing header'>Flight Details</h4>
          <div className='field'>
            <div className='two fields'>
              <div className='field'>
                <label>From</label>
                <input type='text'/>
              </div>
              <div className='field'>
                <label>To</label>
                <input type='text'/>
              </div>
            </div>
          </div>
          <div className='field'>
            <div className='two fields'>
              <div className='field'>
                <label>Flight Number</label>
                <input type='text' placeholder='What is your flight number?'/>
              </div>
              <div className='field'>
                <label>Departure</label>
                <select class='ui search dropdown'>
                  <option value="">Time</option>
                </select>
              </div>
            </div>
          </div>
          <div className='field'>
            <div className='three fields'>
              <div className='five wide field'>
                <label>Gate</label>
                <input type='text'/>
              </div>
              <div className='five wide field'>
                <label>Boarding Group</label>
                <input type='text' maxlength='3'/>
              </div>
              <div className='five wide field'>
                <label>Seat</label>
                <input type='text' maxlength='3'/>
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

export default withRouter(FlightInfo);
