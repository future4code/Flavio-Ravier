import React from "react";
import ReactDom from "react-dom";
import JssProvider from 'react-jss/lib/JssProvider'
import { jss } from "jss";
import {
	MuiThemeProvider,
	createGenerateClassName,
	jssPreset,
	createMuiTheme
} from '@material-ui/core/styles';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';/* 
import {createMuiTheme} from '@material-ui/core/styles'; */
import CssBaseline from "@material-ui/core/CssBaseline"
import AppContainer from "./components/AppContainer"
import {rootReducer} from "./reducers";
import thunk from "redux-thunk";

// permite estilizar os componentes do material com styled components
const generateClassName = createGenerateClassName();
const jss = create ({
	...jssPreset(),
	insertionPoint: document.getElementById("jss-insertion-point")
});

// darkmode
const theme = createMuiTheme({
	pallete: {
		type: "dark"
	}
});

// funções de uso do store, para criar o mesmo e funções utilizando ele
const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  render(
    <JssProvider jss={jss} generateClassName={generateClassName}> {/* para customizar as coisas do material */}
		<MuiThemeProvider theme={theme}> 								{/* darkmode */}
			<CssBaseline/>   											{/* corrige bugs do css */}
				<Provider store={store}>
					<AppContainer />
				</Provider>
		</MuiThemeProvider>
    </JssProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);