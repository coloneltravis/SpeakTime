import React, { Component } from 'react';
import TrafficLight from 'react-trafficlight';
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = { seconds: 0, redOn: false, greenOn: false, yellowOn: false};
    this.startTimer = this.startTimer.bind(this);
  }


  startTimer() {
    this.state.seconds = 0;
    this.state.greenOn = true;
    this.state.yellowOn = false;
    this.state.redOn = false;

    clearInterval(this.timer);
    this.timer = setInterval( () => {this.incrementSeconds() }, 1000 );
  }



  incrementSeconds() {
    if (this.state.seconds == 3) {
      this.setState({
        greenOn: false,
        yellowOn: true
      });
    }

    if (this.state.seconds == 6) {
      this.setState({
        redOn: true,
        yellowOn: false
      });
    }

    this.setState({
      seconds: this.state.seconds + 1
    });
  }


  render () {
    return (
      <div>
          <div className="lights">
            <TrafficLight 
                    RedOn={this.state.redOn}
                    YellowOn={this.state.yellowOn}
                    GreenOn={this.state.greenOn} />
          </div>
          <div className="controls">
            <div><h1>{this.state.seconds}</h1></div>
            <button className="btn btn-primary" onClick={this.startTimer}>Start</button>
          </div>
      </div>
    );
  }
}
