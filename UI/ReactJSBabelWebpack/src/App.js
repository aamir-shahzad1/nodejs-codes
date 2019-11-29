import { useState } from 'react';
import React, { Component } from 'react';
import Admin from './components/admin/Admin'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChat: true,
      setShowChat: false
    };
  }
  render() {
    return (
      <div>
        <h1>I am App</h1>
        <Admin />
        </div>
    )
  }
}

export default App;