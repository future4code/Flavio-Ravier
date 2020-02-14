import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import {
        Button,
        Paper,}
                from "@material-ui/core/";
import styled from "styled-components";
import {routes} from "../../Router"
import { Grid } from 'material-ui'
import {Planet} from '../../../img/index'
import Typography from '@material-ui/core/Typography'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const Hh = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align:center;
`;


//mock de dados
const allTrips =
  
    {plutao: {
          "id": "KmwhN0tLvE6MQM5WxmOY",
          "name": "Picnic de Inverno em Plutão",
          "description": "Único tour que fazemos em planeta anão no sistema solar! Levem casacos que a previsão é de −230 °C",
          "planet": "Plutão",
          "durationInDays": 980,
          "date": "21/12/20",
          "img":Planet.plutao,
     } ,
     marte: {
          "id": "Qi4MEg5TcleOdNWqYmNb",
          "name": "Festança Marciana",
          "description": "Uma viagem bem legal, na melhor época de marte",
          "planet": "Marte",
          "durationInDays": 228,
          "date": "21/12/21",
          "img":Planet.marte,
     },
     jupiter: {
          "id": "Rozpqj50h8inVPKXVbPz",
          "name": "Multi luau em Jupiter",
          "description": "Noite mágica, com vista para as 69 luas de Jupiter",
          "planet": "Jupiter",
          "durationInDays": 540,
          "date": "21/12/20",
          "img":Planet.jupiter,
          "aprovado":""
     },
      neturno: {
          "id": "aO2T6Bif7zDisYd8s7dU",
          "planet": "Netuno",
          "durationInDays": 540,
          "date": "21/12/20",
          "name": "Surfando em Netuno",
          "description": "Nenhum surfista intergalático pode ficar fora dessa!",
          "img":Planet.neturno,
      }}
    



function TripCard(props){
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
                      <Button size="small" color="secondary">
                        Inscreva-se Já!
                      </Button>
                </CardActions>
            </CardContent> 
        </CardActionArea>
    </Card>
);
}

    
  

function mapToDispatch(dispatch){
  return {
    goToApplicationForm: () => dispatch(push(routes.application_form))
  }
}

export default connect(
  null,
  mapToDispatch)(TripCard);

/*   class ApplicationPage extends Component {
    constructor(props) {
      super(props);
      };
      componentDidMount(){
        debugger
        console.log(this.props)
      }
    render() {
      return (
          <Card  style={{ marginLeft:30, marginTop:10, marginBottom:10, width:275, height:375}}>
              <CardActionArea>
                  <CardMedia 
                      height="160"
                      component="img"
                      alt="Planeta de Destino"
                      image={this.props.img}
                      title={this.props.planet}>
                  </CardMedia>
                  <Paper elevation={5} style={{ marginLeft:15, marginTop:5, marginBottom:5, width:150, height:20}}>
                      <Typography variant="body2" color="textSecondary" component="p" align='center'>{this.props.durationInDays} Dias de Trip!</Typography>
                  </Paper>  
                  <CardContent style={{padding:0,paddingLeft:7}}>
                      <Typography gutterBottom variant="h5" component="h2"> 
                        {this.props.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.description}
                      </Typography>
                      <CardActions style={{alignItems:"center",justifyContent:"center"}}>
                            <Button size="small" color="secondary">
                              Inscreva-se Já!
                            </Button>
                      </CardActions>
                  </CardContent> 
              </CardActionArea>
          </Card>
      );
    }
  }
  
  function mapToDispatch(dispatch){
    return {
      goToApplicationForm: () => dispatch(push(routes.application_form))
    }
  }
  
  export default connect(
    null,
    mapToDispatch)(ApplicationPage);
   */