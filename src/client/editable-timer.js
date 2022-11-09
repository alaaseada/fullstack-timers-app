import React from 'react'
import Timer from './timer'
import TimerForm from './timer-form'

class EditableTimer extends React.Component {
  state = {
    editFormOpen: false,
  }

  closeForm = () => {
    this.setState({ editFormOpen: false })
  }

  openForm = () => {
    this.setState({ editFormOpen: true })
  }

  handleFormOpen = () => {
    this.openForm()
  }

  handleFormCancel = () => {
    this.closeForm()
  }

  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer)
    this.closeForm()
  }

  render() {
    const { id, title, project, elapsed, runningSince } = this.props
    return (
      <>
        {this.state.editFormOpen ? (
          <TimerForm
            id={id}
            title={title}
            project={project}
            onFormCancel={this.handleFormCancel}
            onFormSubmit={this.handleFormSubmit}
          />
        ) : (
          <Timer
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            runningSince={runningSince}
            onEditClick={this.handleFormOpen}
            onFormDelete={this.props.onFormDelete}
            onStartClick={this.props.onStartClick}
            onStopClick={this.props.onStopClick}
          />
        )}
      </>
    )
  }
}

export default EditableTimer
