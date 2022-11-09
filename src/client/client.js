class Client {
  static getTimers = async () => {
    const fetched_data = await fetch('/api/v1/');
    const { data } = await fetched_data.json();
    return data;
  };

  static createTimer = async (new_timer) => {
    const fetched_data = await fetch('/api/v1', {
      method: 'POST',
      body: JSON.stringify(new_timer),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });
    const { timer, msg } = await fetched_data.json();
    return { timer, msg };
  };

  static updateTimer = async (new_timer) => {
    const { id, title, project } = new_timer;
    const fetched_data = await fetch(`/api/v1/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ title: title, project: project }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });
    const { timer, msg } = await fetched_data.json();
    return { timer, msg };
  };

  static deleteTimer = async (id) => {
    const fetched_data = await fetch(`/api/v1/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });
    const { msg } = await fetched_data.json();
    return msg;
  };

  static startTimer = async (id) => {
    const fetched_data = await fetch(`/api/v1/start/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ start: Date.now() }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });
    const { timer, msg } = await fetched_data.json();
    return { timer, msg };
  };

  static stopTimer = async (id) => {
    const fetched_data = await fetch(`/api/v1/stop/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ stop: Date.now() }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });
    const { timer, msg } = await fetched_data.json();
    return { timer, msg };
  };
}
export default Client;
