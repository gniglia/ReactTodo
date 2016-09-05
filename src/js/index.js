import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createStore } from "redux";
import reducers from "./reducers";

import Layout from "./components/Layout";

const app = document.getElementById('app');

ReactDOM.render(<Provider store={createStore(reducers)}>
  <Layout />
</Provider>, app);
