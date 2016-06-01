import EventEmitter from 'events';

const CHANGE_EVENT = 'change';

function createStore(spec) {
  const emitter = new EventEmitter();

  const store = Object.assign({
    emitChange() {
      emitter.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
      emitter.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
      emitter.removeListener(CHANGE_EVENT, callback);
    }

  }, spec);

  return store;
}

export default createStore;

