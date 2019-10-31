import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class HollerButton extends Component {
  trackEvent() {
    window.analytics.track('holler-button-click',{eventId: this.props.eventId, eventClass: this.props.eventClass});
  } render() {
    return (
      <button onClick={this.trackEvent.bind(this)}> 
        {this.props.children}; 
        </button>
    );
  }
}

function clickMeHandler() {
  window.analytics.track("click-me-button-click");
}

function App() {
  const arr = ["Carrot", "Tomato", "Potato"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vegetables
        </a>
        {arr.map(name => <div key={`friend-${name}`}>{name}</div>)}
        <hr />
        <HollerButton eventId="holler-btn" eventClass="btn">Holler!</HollerButton>
        <hr />
        <button onClick={clickMeHandler}>
          Click me.
        </button> 
      </header>
    </div>
  );
}

export default App;

