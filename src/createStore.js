export default function createStore(reducer) {
  // add your code here
  let state
<<<<<<< HEAD
  function dispatch(action) {
    state = reducer(state, action)
    render()
  }
=======
  function dispatch(action){
    state = reducer(state,action)
    render()
  }

  function getState(){
    return state
  }
   dispatch({ type: '@@INIT' })
  return {
    dispatch
    getState
  }

}
>>>>>>> 820e77986a4f9a6071e721ed49091c1335d10795

  function getState() {
    return state;
  }
  dispatch({ type: '@@INIT' })
  return {
    dispatch,
    getState
  }
}
//git push
function render() {
  const container = document.getElementById('container');

<<<<<<< HEAD
}
=======
}
>>>>>>> 820e77986a4f9a6071e721ed49091c1335d10795
