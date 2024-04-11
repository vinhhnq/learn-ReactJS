// class component state
import React, {Component} from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: 'welcome visitor'
    }
  }
  handleChangeMessage(){
    this.setState({
      message: 'hola'
    })
  }
  handleChangeHola() {
    this.setState({
      message: 'Welcome'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.handleChangeMessage()}>Hola</button>
        <button onClick={() => this.handleChangeHola()}>Welcome</button>
      </div>
    )
  }
}

export default Message;

// functional component state

//
// import React, {useState} from 'react';
//
// function Message(props) {
//   const [message, setMessage] = useState('welcome')
//   const handleChangeMessage = () => {
//     setMessage('Hola')
//   }
//   return (
//     <div>
//       <h1>{message}</h1>
//       <button onClick={handleChangeMessage}>Change to Hello</button>
//     </div>
//   );
// }
//
// export default Message;
