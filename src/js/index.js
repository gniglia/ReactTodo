import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createStore, compose } from "redux";
import reducers from "./reducers";

import Layout from "./components/Layout";

const app = document.getElementById('app');

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducers, enhancers);

ReactDOM.render(<Provider store={store}>
  <Layout />
</Provider>, app);
