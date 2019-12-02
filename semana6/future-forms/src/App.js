import React from 'react';
import styled from "styled-components";

const PageSection = styled.div`
display: flex;
justify-content:center;
align-items:center;
`;

const MainContainer = styled.div`
    width:  300px;
    display: grid;
    grid-template: repeat(10,50px)/1fr;
   
    
    margin: 0;
    align-items: center;
    justify-content: center;
   
    height: 50px; 
`;


const LabelPergunta = styled.label`

`;

const InputResposta = styled.input`

`;

const SelectResposta = styled.select`

`;

const ButtonNext = styled.button`
margin:auto;
width:150px;
height:20px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tela: "infoGerais",  //-infoEduc -infoNoSup -infoFinal 
      selectPage1: "EnsMed",
    };
  }

  controleSelectPage1 = e => {
		this.setState({
		  selectPage1: e.target.value
		});
	  };

  onClickFolha1 = () => {
    
    
    if (this.state.selectPage1 === "EnsMed"){
      this.setState({ tela: "infoNoSup" });
    }  else {
      this.setState({ tela: "infoEduc" });
    }
  };

  onClickFolha2 = () => {
    
      this.setState({ tela: "infoFinal" });
    
  };


render(){
let containerScreen;
switch(this.state.tela){
  case "infoGerais":
    containerScreen = (
      <MainContainer>
        <h2>DADOS GERAIS</h2>
        <LabelPergunta>1. Qual o seu nome?</LabelPergunta>
        <InputResposta onChange={this.controleInput}></InputResposta>
        <LabelPergunta>1. Qual sua idade?</LabelPergunta>
        <InputResposta></InputResposta>
        <LabelPergunta>1. Qual seu email?</LabelPergunta>
        <InputResposta></InputResposta>
        <LabelPergunta>1. Qual sua escolaridade?</LabelPergunta>
        <SelectResposta onChange={this.controleSelectPage1}>
          <option value="EnsMed">Ensino Médio Incompleto</option>
          <option value="EnsMed">Ensino Médio Completo</option>
          <option value="EnsSup">Ensino Superior Incompleto</option>
          <option value="EnsSup">Ensino Superior Completo</option>
        </SelectResposta>
        <ButtonNext onClick={this.onClickFolha1}>Próxima Etapa >></ButtonNext>
      </MainContainer>
    );
    break;
    case "infoEduc":
      containerScreen = (
      <MainContainer>
        <h2>INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <LabelPergunta>5. Qual curso?</LabelPergunta>
        <InputResposta></InputResposta>
        <LabelPergunta>6. Qual a unidade de ensino?</LabelPergunta>
        <ButtonNext onClick={this.onClickFolha2}>Próxima Etapa >></ButtonNext>
      </MainContainer>
    );
    break;
    case "infoNoSup":
      containerScreen = (
      <MainContainer>
        <h2>INFORMAÇÕES GERAIS DE ENSINO</h2>
        <LabelPergunta>7. Por que você não terminou um curso de graduação?</LabelPergunta>
        <InputResposta></InputResposta>
        <LabelPergunta>8. Você fez algum curso complementar?</LabelPergunta>
        <SelectResposta>
          <option value="EnsMedInc">Nenhum</option>
          <option value="EnsMedC">Curso Técnico</option>
          <option value="EnsSupInc">Curso Inglês</option>
        </SelectResposta>
        <ButtonNext onClick={this.onClickFolha2}>Próxima Etapa >></ButtonNext>
      </MainContainer>);
    break;
    case "infoFinal":
      containerScreen = (
      <MainContainer>
        <h2>O FORMULÁRIO ACABOU</h2>
        <p>Muito Obrigado por participar! Entraremos em contato!</p>
      </MainContainer>
        );
    break;
    default:
       
}


  return (
    <PageSection>
      {containerScreen}
    </PageSection>
  );

}

 
}

export default App;
