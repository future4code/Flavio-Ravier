

import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import {Planet} from '../../img/index'
import { Grid } from 'material-ui'
import Header from "../Layouts/Header"
import TripCardAprove from "../Layouts/TripCardAprove";
import Footer from "../Layouts/Footer";
import PlanetImage from  './../../functions/PlanetImage'
import {getTrips} from './../../actions/tripActions'

const Hh = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align:center;
    color:#002642;
    margin-top:50px;

`;

const ContainerCards = styled.div`
  margin:30px 150px;
  display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  justify-content:center;
`;




class TripsListPage extends Component {
  constructor(props) {
    super(props);
      
    };

       
  
  componentWillMount(){
    this.props.showTrips()
    
  }
  
  render() {

    return (
      <Grid container direction={'column'}>
          <Grid item >
              <Header/>
          </Grid>
          <Grid item alignItens={'center'} justify={'center'} >
              <Hh>aprove</Hh>
          </Grid>
          <ContainerCards>
            
          {this.props.trips.map(trip =>{
            console.log("planet:",trip.planet,"img:",PlanetImage(trip.planet))
            return (
                    <TripCardAprove 
                        img={PlanetImage(trip.planet)}
                        planet={trip.planet}
                        durationInDays={trip.durationInDays}
                        name={trip.name}
                        description={trip.description}
                        >
                    </TripCardAprove>) 
          })}
          </ContainerCards> 
          <Grid item alignItens={'flex-end'} justify={'flex-end'}>
              <Footer></Footer>
          </Grid>
      </Grid>
      
    );
  }
}

const mapStateToProps = state => ({
	trips: state.trips.allTrips
})

function mapToDispatch(dispatch){
  return {
    showTrips:()=> dispatch(getTrips())
  }
}

export default connect(
  mapStateToProps,
  mapToDispatch)(TripsListPage) ;
