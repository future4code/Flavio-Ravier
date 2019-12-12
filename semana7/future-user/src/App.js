import React from 'react';
import ContainerCadastro from './components/ContainerCadastro/ContainerCadastro.js'
import ContainerLista from './components/ContainerLista/ContainerLista.js'
import styled from "styled-components"
import axios from 'axios'

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
`; 
const BotaoPagina = styled.button`
    position: fixed;
    top:0;
    left:0;
    margin:20px;
    padding:4px;
    height:25px;
`;

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          paginaCadastro: true,
      }
  }

  mudarPagina = () =>{
    const paginaCadastroCopia = this.state.paginaCadastro
    this.setState({
      paginaCadastro: !paginaCadastroCopia
    })
  }

  render(){
    if(this.state.paginaCadastro===true){
      return(
        <MainContainer>
          <BotaoPagina onClick={this.mudarPagina}>Ir para página de lista</BotaoPagina>
          <ContainerCadastro></ContainerCadastro>
      </MainContainer>
    )
    } else{
      return(
        <MainContainer>
          <BotaoPagina onClick={this.mudarPagina}>Ir para página de registro</BotaoPagina>
          <ContainerLista></ContainerLista>
        </MainContainer>
    )
    }
    
}
}

export default App;