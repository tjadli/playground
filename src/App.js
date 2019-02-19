import React, { Component } from 'react'
import Messages from './containers/messages/messages.component'

class App extends Component {
  componentDidMount(){

  }
  render() {
    return (
      <div className="App" style={{ marginTop: "80px" }} >
              <Messages />
      </div>
    );
  }
}



export default App;
