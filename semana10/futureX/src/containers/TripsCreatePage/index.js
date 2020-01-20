import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { Grid } from 'material-ui'
import Header from "../Layouts/Header"
import MenuItem from '@material-ui/core/MenuItem';


const planet = [
  {
    value: 'Mercurio',
    label: 'Mercurio',
  },
  {
    value: 'Venus',
    label: 'Venus',
  },
  {
    value: 'Terra',
    label: 'Terra',
  },
  {
    value: 'Marte',
    label: 'Marte',
  },
  {
    value: 'Jupiter',
    label: 'Jupiter',
  },
  {
    value: 'Saturno',
    label: 'Saturno',
  },
  {
    value: 'Urano',
    label: 'Urano',
  },
  {
    value: 'Neturno',
    label: 'Neturno',
  },
  {
    value: 'Plutao',
    label: 'Plutao',
  }
];

const tripCreateForm = [
  
  {
    name: "name",
    type: "text",
    label: "Trip Name",
    required: true,
    pattern:"[A-Za-z]{5,}",
    select:false
    
  },
  {
    name: "description",
    type: "",
    label: "Planet",
    required: true,
    pattern:"[A-Za-z]{30,}",
    select:true   
  }
];


const LoginWrapper = styled.form`
  width: 100%;
  height: 70vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;


class TripsCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form:{},
      planet:"",
    };
  }

  handleFieldChange = event => {
    const {name,value} = event.target
    this.setState({
      form: {...this.state.form, [name]: value} });
      //fazer dispatch dos dados para login aqui
  };

  handleOnSubmit = event =>{
    event.preventDefault();
    console.log(this.state.form);
    console.log(this.state.planet)
  };

  handlePlanetChange = event => {
    this.setState({
      planet:event.target.value
    });
  };
  
  render() {
   

    return (
      <div>
      <Header></Header>
      <LoginWrapper>
      <form onSubmit={this.handleOnSubmit}>
        {tripCreateForm.map(input => (
          <div key={input.name}>

{/* gastei bastante tempo pra aprender como faz pra colcoar um input de select e de input normal junto, no msmo form e na ordem que eu queria */}

            <TextField
              style={{width:"250px", margin:"15px 0 0 5px"}}
              onChange={this.handleFieldChange}
              select={input.select}
              name={input.name}
              type={input.type}
              label={input.label}
              value={this.state.form[input.name] || ""}
              required={input.required}
              inputProps={{ pattern:input.pattern}}
            >

            {input.select && planet.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
            
          ))}
          </TextField>
          </div>
        )
        )}
        <TextField
          style={{width:"250px", margin:"15px 0 0 5px"}}
          id="standard-select-planet"
          select
          label="Select"
          value={this.state.planet}
          onChange={this.handlePlanetChange}
          helperText="Please select your Planet"
        >
          {planet.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
            <div style={{margin:"10px 0"}}></div>
                <Button type="submit"  onClick={this.props.goToTrips} >Login</Button>
            
      </form>
      
      </LoginWrapper>
      </div>
      
      
    );
  }
}

export default TripsCreatePage;
