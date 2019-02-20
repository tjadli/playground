import React, { Component } from 'react'
import Messages from './containers/messages/messages.component';
import Header from './containers/header'

class App extends Component {
  componentDidMount(){

  }
  render() {
    return (
      <div className="App" >
              <Header/>
              <Messages />
      </div>
    );
  }
}



export default App;
