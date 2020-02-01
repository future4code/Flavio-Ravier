import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";


import {
  ThemeProvider,
  DefaultTheme,
  StyleReset,
  Div,
  Icon,
  Input
} from "react-atomize";
import styled from "styled-components"


import { createStore } from "redux";
import rootReducer from "./reducers";



const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
