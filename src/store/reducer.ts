import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LANGUAGE_UI':
        return {
          ...state,
          languageUI: action.languageUI,
        }
      case 'SET_POINTS':
        return {
          ...state,
          points: action.points,
        }
      default:
        return state
    }
}

export default reducer;