/* action types */

export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
export const CLEAR_SEARCH_TEXT = 'CLEAR_SEARCH_TEXT';
export const SEARCH = 'SEARCH';

/* action creators */

export function updateSearchText(text) {
  return { type: UPDATE_SEARCH_TEXT, text: text }
}

export function search(response) {
  return { type: SEARCH, response: response }
}

export function clearSearchText() {
  return { type: CLEAR_SEARCH_TEXT }
}
