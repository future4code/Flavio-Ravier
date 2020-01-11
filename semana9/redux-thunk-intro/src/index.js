import React from "react";
import ReactDOM from "react-dom";
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import {
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset
} from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppContainer from "./components/AppContainer";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: document.getElementById("jss-insertion-point")
});

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </MuiThemeProvider>
    </JssProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
