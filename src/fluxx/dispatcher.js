import { Dispatcher } from 'flux';

const VIEW_ACTION     = "VIEW_ACTION";
const SERVER_ACTION   = "SERVER_ACTION";

class AppDispatcher extends Dispatcher {
  handleAction(source, action) {
    const payload = { source, action };

    setTimeout(() => {
      console.log(`%c DISPATCHING ${source}:`, 'color: green', action);
      this.dispatch(payload);
    }, 0);
  }

  handleViewAction(action) {
    this.handleAction(VIEW_ACTION, action);
  }

  handleServerAction(action) {
    this.handleAction(SERVER_ACTION, action);
  }
}

const instance = new AppDispatcher();
export default instance;
export const handleViewAction = instance.handleViewAction.bind(instance);
export const handleServerAction = instance.handleServerAction.bind(instance);
