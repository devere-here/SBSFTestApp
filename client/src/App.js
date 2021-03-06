import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes} from './Routes'

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };


  render() {
    return (
      <div className="App">
      <Routes />
      <p>the response is {this.state.response}</p>
      </div>
    );
  }
}

export default App;
