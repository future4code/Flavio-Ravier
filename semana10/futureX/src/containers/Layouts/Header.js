import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar } from 'material-ui'
import Typography from '@material-ui/core/Typography'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AvatarLogo from '../../img/AvatarLogo'
import { Grid } from 'material-ui'
import PersonIcon from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import {routes} from "../Router"

const colortheme = createMuiTheme({
    palette: {
      primary: { main: "#fff"},
      secondary: { main: "#03a9f4", contrastText: "#fff" }
    },
    
  });
  
const Header = props => (
    <AppBar color="primary" position="static">
        <Toolbar>
            <MuiThemeProvider theme={colortheme}>
                <Grid container >
                    <Grid item >
                        <AvatarLogo />
                    </Grid>
                </Grid>
                    <Grid item>
                        <Grid container direction={'column'} >
                            <Grid  >
                                <Typography variant="headline"  color="primary" >
                                    FUTURE EX 
                                </Typography>
                            </Grid>
                            <Grid >
                                <Grid container justify={'space-between'} onClick={props.goToLogin}>
                                    <Grid item>
                                        <PersonIcon/>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="TITLE"  color="primary" >
                                           LOGIN
                                        </Typography>
                                    </Grid>    

                                </Grid>
                                
                            </Grid>
                            
                        </Grid>
                        
                    </Grid>   
            </MuiThemeProvider>
        </Toolbar>
    </AppBar> 
  )

  function mapDispatchToProps(dispatch) {
	return {
		goToLogin: () => dispatch(push(routes.login)),  //trocar de página
	}
}

export default connect(
  null,
  mapDispatchToProps) (Header);
