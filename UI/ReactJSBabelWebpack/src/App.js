import { useState } from 'react';
import React, { Component } from 'react';
import SimpleForm from './components/SimpleForm';
import './App.css';

// const App = () => {
//   let [showChat, setShowChat] = useState(false);

//   const startChat = () => { setShowChat(true); }
//   const hideChat = () => { setShowChat(false); }

//     return (
//       <div>Testing</div>
//       // <div className = "bot">
//       //   <div>Testing it </div>
//       //   <div style ={{display: showChat ? "" : "none"}}>
//       //     <SimpleForm></SimpleForm>
//       //   </div>      
//       //   {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
//       //   <div>
//       //     {!showChat 
//       //       ? <button className="btn" onClick={() => startChat()}>click to chat... </button> 
//       //       : <button className="btn" onClick={() => hideChat()}>click to hide... </button>}
//       //   </div>
//       // </div>      
//     )
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChat: true,
      setShowChat: false
    };
  }
  // let [showChat, setShowChat] = useState(false);

  // startChat = () => { this.setState({ setShowChat: true }) }
  // hideChat = () => { this.setState({ setShowChat: false }) }
  render() {
    return (
      
      // <div className="bot">
      //   <div>Testing it </div>
        <div style={{ display: this.state.showChat ? "" : "none" }}>
          <SimpleForm></SimpleForm>
        </div>
      //   {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
      //   <div>
      //     {!showChat
      //       ? <button className="btn" onClick={this.startChat}>click to chat... </button>
      //       : <button className="btn" onClick={this.hideChat}>click to hide... </button>}
      //   </div>
      // </div>
    )
  }
}

export default App;