import candyReducer from './reducers/candyReducer';
import countReducer from './reducers/countReducer'

function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    // render();
  }

  dispatch({type: '@@INIT'})

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState
  }
}

// function render() {
//   const container = document.getElementById('container');
//   container.textContent = store.getState()
// }


export default createStore;
