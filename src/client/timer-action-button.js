import React from 'react'

class TimerActionButton extends React.Component {
  render() {
    if (this.props.timerIsRunning) {
      return (
        <div
          className="ui bottom attached blue basic button"
          onClick={this.props.onStopClick}
        >
          Stop
        </div>
      )
    } else {
      return (
        <div
          className="ui bottom attached blue basic button"
          onClick={this.props.onStartClick}
        >
          Start
        </div>
      )
    }
  }
}

export default TimerActionButton
