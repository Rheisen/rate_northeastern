/* action types */

export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

/* action creators */

export function signInUser(user) {
  return { type: SIGN_IN_USER, user }
}
