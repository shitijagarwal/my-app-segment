import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class SignupButton extends Component {
  trackEvent() {
    window.analytics.track('button-click',{eventId: this.props.eventId, eventClass: this.props.eventClass});
  } render() {
    return (
      <button onClick={this.trackEvent.bind(this)}>
        {this.props.children};
      </button>
    );
  }
}


function clickHandlerB() {
  // debugger;
  window.analytics.track("clicked-button-x-from-b");
}

function App() {
  const x = 100;
  const arr = ["Carrot", "Tomato", "Potato"];

  const clickHandler = () => {
    // debugger;
    window.analytics.track("clicked-button-x");
  };

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
          Vegetables: {x}
        </a>
        {arr.map(name => <div key={`friend-${name}`}>{name}</div>)}
        <hr />
        <SignupButton eventId="holler-btn" eventClass="btn">Holler!</SignupButton>
        <hr />
        <button onClick={clickHandlerB}>
          Click me.
        </button> 
      </header>
    </div>
  );
}

export default App;

