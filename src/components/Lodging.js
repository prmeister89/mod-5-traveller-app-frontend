import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Arrival extends Component {
  render() {
    return (
      <div>
        <form className='ui form'>
          <h4 className='ui dividing header'>Lodging</h4>
          <div className='field'>
            <label>Name</label>
            <input type='text' placeholder='Where are you staying?'/>
          </div>
          <div className='field'>
            <div className='two fields'>
              <div className='field'>
                <label>Check-In</label>
                <input type='text'/>
              </div>
              <div className='field'>
                <label>Check-Out</label>
                <input type='text'/>
              </div>
            </div>
          </div>
          <div className='field'>
            <label>Address</label>
            <input type='text'/>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(Arrival);
