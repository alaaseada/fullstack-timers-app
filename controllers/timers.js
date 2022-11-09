const { writeFile } = require('fs/promises');
const uuid = require('uuid');
const { StatusCodes } = require('http-status-codes');
const { readFileSync } = require('fs');

const readData = () => {
  const dataString = readFileSync('data.json');
  const data = JSON.parse(dataString);
  return data;
};

getAllTimers = async (req, res) => {
  const data = readData();
  res.status(StatusCodes.OK).json({ data });
};

getTimerById = async (req, res) => {
  const { id } = req.params;
  const data = readData();
  const timer = data.filter((item) => item.id === id);
  res.send({ timer });
};

createTimer = async (req, res) => {
  const { title, project } = req.body;
  const data = readData();
  const timer = {
    id: uuid.v4(),
    title: title,
    project: project,
    elapsed: 0,
    runningSince: null,
  };
  data.push(timer);
  await writeFile('data.json', JSON.stringify(data));
  return res.status(StatusCodes.CREATED).json({ timer, msg: 'New data added' });
};

updateTimer = async (req, res) => {
  const { id } = req.params;
  const data = readData();
  let newTimer;
  const newData = data.map((timer) => {
    if (timer.id === id) {
      newTimer = {
        ...timer,
        title: req.body.title || timer.title,
        project: req.body.project || timer.project,
      };
      return newTimer;
    } else {
      return timer;
    }
  });
  await writeFile('data.json', JSON.stringify(newData));
  return res
    .status(StatusCodes.OK)
    .json({ timer: newTimer, msg: 'Data has been updated' });
};

startTimer = async (req, res) => {
  const { id } = req.params;
  const data = readData();
  const newData = data.map((timer) => {
    if (timer.id === id) {
      return { ...timer, runningSince: req.body.start };
    } else {
      return timer;
    }
  });
  await writeFile('data.json', JSON.stringify(newData));
  res
    .status(StatusCodes.OK)
    .json({ msg: `The timer with id=${id} has been started.` });
};

stopTimer = async (req, res) => {
  const { id } = req.params;
  const data = readData();
  const newData = data.map((timer) => {
    if (timer.id === id) {
      return {
        ...timer,
        elapsed:
          timer.elapsed + (Number(req.body.stop) - Number(timer.runningSince)),
        runningSince: null,
      };
    } else {
      return timer;
    }
  });
  await writeFile('data.json', JSON.stringify(newData));
  res
    .status(StatusCodes.OK)
    .json({ msg: `The timer with id="${id}" has been stopped.` });
};

deleteTimer = async (req, res) => {
  const { id } = req.params;
  const data = readData();
  const newData = data.filter((timer) => timer.id !== id);
  await writeFile('data.json', JSON.stringify(newData));
  return res
    .status(StatusCodes.OK)
    .json({ msg: `Timer with id=${id} has been deleted.` });
};

module.exports = {
  getAllTimers,
  getTimerById,
  createTimer,
  updateTimer,
  startTimer,
  stopTimer,
  deleteTimer,
};
