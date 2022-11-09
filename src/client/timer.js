import React from 'react'
import Helper from './helper'
import TimerActionButton from './timer-action-button'

class Timer extends React.Component {
  componentDidMount = () => {
    this.updateInterval = setInterval(() => this.forceUpdate(), 50)
  }

  componentWillUnmount = () => {
    clearInterval(this.updateInterval)
  }

  handleFormDelete = () => {
    this.props.onFormDelete(this.props.id)
  }

  handleStartTimer = () => {
    this.props.onStartClick(this.props.id)
  }

  handleStopTimer = () => {
    this.props.onStopClick(this.props.id)
  }
  render() {
    const { id, title, project, elapsed, runningSince } = this.props
    const formatedElapsed = Helper.formatElapsedTime(elapsed, runningSince)
    return (
      <div className="ui centered card">
        <div className="content">
          <div className="header">{title}</div>
          <div className="meta">{project}</div>
          <div className="center aligned description">
            <h2>{formatedElapsed}</h2>
          </div>
          <div className="extra content">
            <span
              className="right floated edit icon"
              onClick={this.props.onEditClick}
            >
              <i className="edit icon" />
            </span>
            <span
              className="right floated trash icon"
              onClick={this.handleFormDelete}
            >
              <i className="trash icon" />
            </span>
          </div>
        </div>
        <TimerActionButton
          timerIsRunning={!!this.props.runningSince}
          onStartClick={this.handleStartTimer}
          onStopClick={this.handleStopTimer}
        />
      </div>
    )
  }
}

export default Timer
