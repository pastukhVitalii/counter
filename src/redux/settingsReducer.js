import black from '../components/Wednesday/black.module.css';
import white from '../components/Wednesday/white.module.css';
import green from '../components/Wednesday/green.module.css';

let initialState = {
  style: black,
  themes: [
    {id: 1, name: 'dark', checked: true},
    {id: 2, name: 'light', checked: false},
    {id: 3, name: 'green', checked: false}
  ],
}

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      // debugger
      return {
        ...state, themes: state.themes.map(t =>{
          if(t.id === action.id) {
            return {...t, checked: action.checked}
          } else {
            return {...t, checked: false}
          }
        }) , style: action.style === 1 ? black : action.style === 2 ? white : green
  }
default:
  return state
}
}

