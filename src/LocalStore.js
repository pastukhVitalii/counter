export let saveState = (key, state) => {
  let stateAsString = JSON.stringify(state);
  localStorage.setItem(key, stateAsString)
}

export let restoreState = (key, defaultState) => {
  let stateAsString = localStorage.getItem('state');
  if (stateAsString) {
    defaultState = JSON.parse(stateAsString);
  }
  return defaultState;
}