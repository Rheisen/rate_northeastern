const initialState = {
  user: {
    signedIn: false,
    profile: {
      firstName: null,
      lastName: null,
      email: null
    }
  }
};

function appState(state = initialState, action) {
  switch (action.type) {
    case 'SIGN_IN_USER':
      return Object.assign({}, state, {
        signedIn: true,
        profile: action.user
      });
    default:
      return state;
  }
}

export default appState;
