import React from 'react'
import TimerForm from './timer-form'

class ToggleableTimerForm extends React.Component {
  state = { isOpen: false }

  handleFormOpen = () => {
    this.setState({ isOpen: true })
  }

  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer)
    this.handleFormCancel()
  }

  handleFormCancel = () => {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <>
        {this.state.isOpen ? (
          <TimerForm
            onFormSubmit={this.handleFormSubmit}
            onFormCancel={this.handleFormCancel}
          />
        ) : (
          <div className="ui basic content center aligned segment">
            <button
              className="ui basic button icon"
              onClick={this.handleFormOpen}
            >
              <i className="plus icon" />
            </button>
          </div>
        )}
      </>
    )
  }
}

export default ToggleableTimerForm
