const INITIAL_STATE = {
  lessons: [],
  showWelcome: false,
  wishBoard: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'SHOW':
      return {
        ...state,
        showWelcome: true
      }

    case 'WISH':
      return {
        ...state,
        wishBoard: action.payload
      }

    case 'CREATE':
      return {
        ...state,
        lessons: [...state.lessons, {
          'title': action.payload,
          '_id': Math.floor(Math.random() * 100000),
          'parts': []
        }]
      }

    case 'DELETE':
      return {
        ...state,
        lessons: action.payload
      }

    case 'PART':
      return {
        ...state,
        lessons: action.payload
      }

    default:
      return state;
  }
};
export default reducer;
