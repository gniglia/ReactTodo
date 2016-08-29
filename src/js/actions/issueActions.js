import axios from "axios";

export function fetchIssues() {
  return function(dispatch) {
    axios.get("https://api.github.com/repos/gniglia/reacttodo/issues")
      .then((response) => {
        dispatch({type: "FETCH_ISSUES_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_ISSUES_REJECTED", payload: err})
      })
  }
}

export function addIssue(text) {
  return function(dispatch) {
    axios.post("https://api.github.com/repos/gniglia/reacttodo/issues", { title: text })
      .then((response) => {
        //fetchIssues()
      })
  }
}
