import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import {
        Button,
        Paper,}
                from "@material-ui/core/";
import styled from "styled-components";
import {routes} from "../Router"
import { Grid } from 'material-ui'
import {Planet} from '../../img/index'
import Typography from '@material-ui/core/Typography'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



// ia usar esse aqui pra poder colocar um botão de aprovar, e aprovar as viagens.
function TripCardAprove(props){
  return (
    <Card  style={{ marginLeft:30, marginTop:10, marginBottom:10, width:275, height:375}}>
        <CardActionArea>
            <CardMedia 
                height="160"
                component="img"
                alt="Planeta de Destino"
                image={props.img}
                title={props.planet}>
            </CardMedia>
            <Paper elevation={5} style={{ marginLeft:15, marginTop:5, marginBottom:5, width:150, height:20}}>
                <Typography variant="body2" color="textSecondary" component="p" align='center'>{props.durationInDays} Dias de Trip!</Typography>
            </Paper>  
            <CardContent style={{padding:0,paddingLeft:7}}>
                <Typography gutterBottom variant="h5" component="h2"> 
                  {props.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.description}
                </Typography>
                <CardActions style={{alignItems:"center",justifyContent:"center"}}>
                      <Button position={"bottom"} size="small" color="secondary">
                        Aprovar?
                      </Button>
                </CardActions>
            </CardContent> 
        </CardActionArea>
    </Card>
);
}

    


function mapToDispatch(dispatch){
  return {
    goToApplicationForm: () => dispatch(push(routes.application_form)),
    
  }
}

export default connect(
  null,
  mapToDispatch)(TripCardAprove);
