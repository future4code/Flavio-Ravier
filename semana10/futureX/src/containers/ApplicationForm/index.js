import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import {routes} from "../Router"
import NewWindow from 'react-new-window'
 


const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const window = {
  width: 600,
  height: 400
}

class ApplicationForm extends Component {
  constructor(props) {
    super(props);
   
    };
  
  render() {
// eu queria fazer um form que abrisse uma janela aqui, mas nem deu tempo de chegar nessa parte.
    return (
      <NewWindow name={"aloha"} title={"alohatitle"} features={window} >
        <h1>Hi 👋</h1>
      </NewWindow>
    );
  }
}



export default ApplicationForm;



