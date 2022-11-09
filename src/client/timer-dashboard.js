import React from 'react';
import EditableTimerList from './editable-timer-list';
import ToggleableTimerForm from './toggleable-timer-form';
import Helper from './helper';
import Client from './client';
import { useState, useEffect } from 'react';

function TimerDashboard() {
  const [timers, setTimers] = useState([]);

  const fetchData = () => {
    Client.getTimers().then((data) => {
      setTimers(data);
    });
  };

  useEffect(() => {
    fetchData();
    const refresher = setInterval(fetchData, 5000);
  }, []);

  const createNewTimer = async (new_timer) => {
    const t = Helper.createTimer(new_timer);
    const { msg } = await Client.createTimer(t);
    console.log(`${msg}`);
  };

  const handleCreateFormSubmit = (timer) => {
    createNewTimer(timer);
  };

  const handleFormDelete = async (id) => {
    const msg = await Client.deleteTimer(id);
    console.log(msg);
  };

  const handleEditFormSubmit = async (new_timer) => {
    const { timer, msg } = await Client.updateTimer(new_timer);
  };

  const handleStartTimer = async (id) => {
    const { msg } = await Client.startTimer(id);
    console.log(msg);
  };

  const handleStopTimer = async (id) => {
    const { msg } = await Client.stopTimer(id);
    console.log(msg);
  };

  return (
    <div className='ui three column centered grid'>
      <div className='column'>
        {timers.length > 0 ? (
          <EditableTimerList
            timers={timers}
            onFormSubmit={handleEditFormSubmit}
            onFormDelete={handleFormDelete}
            onStartClick={handleStartTimer}
            onStopClick={handleStopTimer}
          />
        ) : (
          <div className='ui basic content msg'>No timers were found.</div>
        )}
        <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
      </div>
    </div>
  );
}

export default TimerDashboard;
