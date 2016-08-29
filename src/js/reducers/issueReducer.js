export default function reducer(state={
    issues: [],
    fetching: false,
    fetched: false,
    error: null
  }, action) {

    switch (action.type) {
      case "FETCH_ISSUES": {
        return {...state}
      }
      case "FETCH_ISSUES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_ISSUES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          issues: action.payload,
        }
      }
      case "ADD_ISSUE": {
        return {
          ...state,
          issues: [...state.issues, action.payload],
        }
      }
    }

    return state
}
