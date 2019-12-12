import React from 'react';
import styled from "styled-components"
import axios from 'axios'

const MainContainerCadastro = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    border:solid 1px black;
    width:350px;
    height:150px;
    margin-top:50px;
    padding:10px;
`; 

const DivForm = styled.form`
  margin-top:15px;
`;

const LabelForm =styled.label`
  
`;

const InputForm = styled.input`
position:relative;
  left:10px;
`;

const BotaoSalvar = styled.button`
margin:15px auto;
`;

const baseURL = 'https://us-central1-future4-users.cloudfunctions.net/api';

class ContainerCadastro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           name: "",
           email: "",
        }
    }
  
handleNameChange = (event) =>{
  this.setState({ name: event.target.value})
}

handleEmailChange = (event) =>{
  this.setState({ email: event.target.value})
}

handleCreateUser = () =>{
  const userToBeCreated = {
    name: this.state.name,
    email: this.state.email,
  }

  const axiosConfig = {
    headers: {
      "api-token": "bat-ravi",
    }
  }

  axios.post(`${baseURL}/users/createUser`, userToBeCreated, axiosConfig).then((a)=>{
    window.alert("Tudo ok! Status: "+a.status)
  }).catch((aiai)=>{
    window.alert(aiai)
})
}

    render(){
        return(
          <MainContainerCadastro>
            <DivForm>
              <LabelForm>Nome:</LabelForm>
              <InputForm value={this.state.name} onChange={this.handleNameChange}></InputForm>
            </DivForm>
            <DivForm>
              <LabelForm>Email:</LabelForm>
              <InputForm value={this.state.email} onChange={this.handleEmailChange}></InputForm>
            </DivForm>
            <BotaoSalvar onClick={this.handleCreateUser}>Salvar</BotaoSalvar>
        </MainContainerCadastro>
      ) 
    }
  }
  
  export default ContainerCadastro;