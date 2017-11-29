const initialState = {
  user: {
    signedIn: false,
    profile: {
      firstName: null,
      lastName: null,
      email: null
    }
  },
  searchText: '',
  search: []
};

function appState(state = initialState, action) {
  switch (action.type) {
    case 'SIGN_IN_USER':
      return Object.assign({}, state, {
        user: {
          signedIn: true
        }
      });
    case 'UPDATE_SEARCH_TEXT':
      return Object.assign({}, state, {
        searchText: action.text
      });
    case 'CLEAR_SEARCH_TEXT':
      return Object.assign({}, state, {
        searchText: ''
      });
    case 'SEARCH':
      return Object.assign({}, state, {
        search: action.response
      });
    default:
      return state;
  }
}

export default appState;
