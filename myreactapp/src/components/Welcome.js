import React, {Component} from 'react';

class Welcome extends Component {
  render() {
    return <h1>welcome {this.props.surname} + {this.props.fullname}</h1>
  }
}

export default Welcome;

