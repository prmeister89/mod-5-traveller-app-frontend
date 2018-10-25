import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends Component {

  render() {
    return (
      <div className='ui narrow container segment'>

        <div className='ui placeholder segment'>
          <div class="ui two column stackable center aligned grid">
            <div class="ui vertical divider">Or</div>
            <div class="middle aligned row">
              <div class="column">
                <div className='ui form'>
                <h4 className='ui blue dividing header'>Log-In</h4>
                  <div className='field'>
                    <label>Username</label>
                    <input type="text" name="first-name" placeholder="Username" />
                  </div>
                  <div class="field">
                    <label>Password</label>
                    <input type="text" name="last-name" placeholder="Password" />
                  </div>
                  <NavLink className='item' to={`/trips`}>
                    <button className='ui blue floated center floated button'>Log-In</button>
                  </NavLink>
                </div>
              </div>
              <div class="column">
                <div className='ui form'>
                <h4 className='ui blue dividing header'>Sign-Up</h4>
                  <div className='two fields'>
                    <div className='field'>
                      <label>First Name</label>
                      <input type="text" name="first-name" placeholder="First Name" />
                    </div>
                    <div className='field'>
                      <label>Last Name</label>
                      <input type="text" name="first-name" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className='two fields'>
                    <div className='field'>
                      <label>Username</label>
                      <input type="text" name="first-name" placeholder="Username" />
                    </div>
                    <div className='field'>
                      <label>Password</label>
                      <input type="text" name="first-name" placeholder="Password" />
                    </div>
                  </div>

                  <NavLink className='item' to={`/trips`}>
                    <button className='ui blue floated center floated button'>Sign-Up</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(null, null)(Login));
