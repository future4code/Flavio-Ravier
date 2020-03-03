import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import {routes} from "../Router/index"
import Header from "../Layouts/Header"

let expressaoRegular = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
//validação simples do email
const loginForm = [
  
  {
    name: "email",
    type: "email",
    label: "E-mail",
    required: true,
    
  },
  {
    name: "password",
    type: "password",
    label: "Senha",
    required: true,
    
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



class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form:{}
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
    console.log(this.state.form)
  }

  render() {
   

    return (
      <div>
      <Header></Header>
      <LoginWrapper>
      <form onSubmit={this.handleOnSubmit}>
        {loginForm.map(input => (
          <div key={input.name}>
            <TextField
              onChange={this.handleFieldChange}
              name={input.name}
              type={input.type}
              label={input.label}
              value={this.state.form[input.name] || ""}
              required={input.required}
             /*  inputProps={{ pattern:input.pattern}} */
            />
          </div>
        )
        )}
            <Button type="submit"  onClick={this.props.goToTrips} >Login</Button>
      </form>
      
      </LoginWrapper>
      </div>
      
      
    );
  }
}

function mapToDispatch(dispatch) {
  return{
    goToTrips: () => dispatch(push(routes.trips)),
  }
}

export default connect(
  null,
  mapToDispatch)(LoginPage);
