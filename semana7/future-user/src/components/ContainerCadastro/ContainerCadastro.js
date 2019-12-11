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


class ContainerCadastro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           /*  paginaCadastro: true, */
        }
    }
  
    render(){
        return(
          <MainContainerCadastro>
            <DivForm>
              <LabelForm>Nome:</LabelForm>
              <InputForm></InputForm>
            </DivForm>
            <DivForm>
              <LabelForm>Email:</LabelForm>
              <InputForm></InputForm>
            </DivForm>
            <BotaoSalvar>Salvar</BotaoSalvar>
        </MainContainerCadastro>
      ) 
    }
  }
  
  export default ContainerCadastro;