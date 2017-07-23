const state = {
  started: false,
  finished: false
};

const mutations = {
  setStarted () {
    state.started = true;
  },
  setFinished () {
    state.started = false;
    state.finished = true;
  }
};

const actions = {
};

const getters = {
  hasCounterStarted () {
    return state.started;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
