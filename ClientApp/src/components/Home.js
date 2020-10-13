import React, { Component } from 'react';
import TrafficLight from 'react-trafficlight';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = { seconds: 0, redOn: false, greenOn: false, yellowOn: false};
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);

  }


  startTimer() {
    this.setState({
      seconds: 0,
      greenOn: false,
      yellowOn: false,
      redOn: false
    });

    clearInterval(this.timer);
    this.timer = setInterval( () => {this.incrementSeconds() }, 1000 );
  }


  stopTimer() {
    clearInterval(this.timer);
  }


  incrementSeconds() {
    if (this.state.seconds > 9) {
      this.setState({
        greenOn: true,
        yellowOn: false,
        redOn: false
      });
    }


    if (this.state.seconds > 29) {
      this.setState({
        greenOn: false,
        yellowOn: true
      });
    }

    if (this.state.seconds > 59) {
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
            <button style={{paddingRight:10}} className="btn btn-success" onClick={this.startTimer}>Start</button>
            <button className="btn btn-danger" onClick={this.stopTimer}>Stop</button>
          </div>
      </div>
    );
  }
}
