import { createMuiTheme } from "@material-ui/core";
import {orange, deepOrange} from "@material-ui/core/colors/";

export default createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: {
      main: orange.A400,
      light: orange[200],
      dark: orange[700],
      white: '#ffffff'
    },
    type: 'light'
  },
  spacing: {
    unit: 10
  }
})
