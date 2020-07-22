
let initialState = {
  loading: true
}

export const todolistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {...state, loading: action.loading}
    default:
      return state
  }
}