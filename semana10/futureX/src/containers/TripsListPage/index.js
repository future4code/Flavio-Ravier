import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Header from "../Layouts/Header"
import MUIDataTable from "mui-datatables";
import { Grid } from 'material-ui'
import Footer from "../Layouts/Footer";
import {getTrips, getTripsDetails} from './../../actions/tripActions'

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';

const Titulo = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align:center;
    color:#002642;
    margin-top:50px;

`;

const columns = [
  {
   name: "name",
   label: "Trip",
   options: {
    filter: false,
    sort: true,
   }
  },
  {
   name: "userName",
   label: "User",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "planet",
   label: "Planet",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "status",
   label: "Status",
   options: {
    filter: true,
    sort: false,
   }
  },
 ]; 
 
 const data = [
  { name: "Joe James", userName: "Test Corp", planet: "Yonkers", status: "NY" },
  { name: "John Walsh", userName: "Test Corp", planet: "Hartford", status: "CT" },
  { name: "Bob Herm", userName: "Test Corp", planet: "Tampa", status: "FL" },
  { name: "James Houston", userName: "Test Corp", planet: "Dallas", status: "TX" },
 ]; 

 

 


const options = {
  filter: true,
  selectableRows: 'multiple',
  filterType: 'dropdown',
  responsive: "scroll",
  rowsPerPage: 10,
  page: 1,
  
};

const theme = createMuiTheme({
  typography: {useNextVariants: true},
});
/*  const options = {
  filterType: "dropdown",
  responsive: "scroll"
}; */



class TripsListPage extends Component {
  constructor(props) {
    super(props);
        this.state ={
            approvedTrips:[{
              name:"",
              userName:"aaa",
              planet:"",
              status:"aproved"
            }]
        }
    };
  
  componentDidMount(){
   this.props.showTrips();
   
    }
  
// duvida
  render() {
//minha maior frustação está aqui, a ideia aqui era de fazer uma tabela em que tivesse
// informações do nome da viagem, do planeta viajado,
// do nome do usuario aplicando e do status (se aprovado ou não)
// pra isso, eu precisava, dentro do render, criar um array que tivesse dados
// provenientes de dois gets, getTrip e getTripDetail. Mas eu n consegui,
// tentei usar maps, dentro de maps e ainda assim não deu certo. 

    let data = this.props.trips.map(trip =>({
      id:trip.id,
      name:trip.name,
      userName:"não sei como pegar",
      planet:trip.planet,
      status:"não sei como pegar o exato"
   }))
    

    return (
      <Grid container direction={'column'}>
          <Grid item >
              <Header/>
          </Grid>
          <Grid item alignItens={'center'} justify={'center'} >
              <Titulo>trips list</Titulo>
          </Grid>
         <MuiThemeProvider theme={theme}>
            <MUIDataTable
                    title={"Trip List"}
                    data={data}
                    columns={columns}
                    options={options} 
                  />
         </MuiThemeProvider>
              
         
          
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips.allTrips,
  tripsDetail: state.trips.tripsDetail
})

function mapToDispatch(dispatch){
  return {
    showTrips:()=> dispatch(getTrips()),
    fetcherTripDetail: (tripId)=> dispatch(getTripsDetails(tripId))
  }
}
export default connect(
  mapStateToProps,
  mapToDispatch)(TripsListPage);



