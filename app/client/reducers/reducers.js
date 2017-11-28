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
    default:
      return state;
  }
}

export default appState;
