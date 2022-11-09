import React from 'react'
import EditableTimer from './editable-timer'

class EditableTimerList extends React.Component {
  render() {
    const timers = this.props.timers.map((timer) => (
      <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
        onFormSubmit={this.props.onFormSubmit}
        onFormDelete={this.props.onFormDelete}
        onStartClick={this.props.onStartClick}
        onStopClick={this.props.onStopClick}
      />
    ))
    return <>{timers}</>
  }
}

export default EditableTimerList
