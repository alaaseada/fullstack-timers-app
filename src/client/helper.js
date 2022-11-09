import * as uuid from 'uuid'
class Helper {
  static formatElapsedTime(elapsed, runningSince = null) {
    function to2Digits(num) {
      return num < 10 ? '0' + num : num
    }

    let hours = 0,
      minutes = 0,
      seconds = 0,
      totalElapsed = Number(elapsed)

    if (runningSince) totalElapsed += Date.now() - runningSince

    seconds = Math.floor((totalElapsed / 1000) % 60)
    minutes = Math.floor((totalElapsed / 1000 / 60) % 60)
    hours = Math.floor(totalElapsed / 1000 / 60 / 60)

    return `${to2Digits(hours)}:${to2Digits(minutes)}:${to2Digits(seconds)}`
  }

  static createTimer(timer) {
    return {
      id: uuid.v4(),
      title: timer.title,
      project: timer.project,
      elapsed: 0,
      runningSince: null,
    }
  }
}

export default Helper
