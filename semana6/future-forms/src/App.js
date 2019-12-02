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
      Input1:"",
      Input2:"",
      Input3:"",
      Input4:"",
      Input5:"",
      Input6:"",
      
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }



  controleSelectPage1 = e => {
		this.setState({
		  selectPage1: e.target.value
		});
	  };

  onClickFolha1 = () => {
    if (this.state.Input1 !== "" && this.state.Input2 !== "" && this.state.Input3 !== "" ){
      if (this.state.selectPage1 === "EnsMed"){
        this.setState({ tela: "infoNoSup" });
      }  else {
        this.setState({ tela: "infoEduc" });
      }
    } else {
      alert("Não deixe espaços em branco")
    }
    };
    
    

  onClickFolha2 = () => {
    if (this.state.tela === "infoEduc"){
      if (this.state.Input4 !== "" && this.state.Input5 !== ""){

        this.setState({ tela: "infoFinal" });
      } else {
        alert("Não deixe espaços em branco")
      }
    } else {
      if (this.state.Input6 !== "" ){

      this.setState({ tela: "infoFinal" });
    } else {
      alert("Não deixe espaços em branco")
    }

    }

      
    
  };


render(){
let containerScreen;
switch(this.state.tela){
  case "infoGerais":
    containerScreen = (
      <MainContainer>
        <h2>DADOS GERAIS</h2>
        <LabelPergunta>1. Qual o seu nome?</LabelPergunta>
        <InputResposta value={this.state.Input1} name="Input1" onChange={this.handleInputChange}></InputResposta>
        <LabelPergunta>1. Qual sua idade?</LabelPergunta>
        <InputResposta value={this.state.Input2} name="Input2" onChange={this.handleInputChange}></InputResposta>
        <LabelPergunta>1. Qual seu email?</LabelPergunta>
        <InputResposta value={this.state.Input3} name="Input3" onChange={this.handleInputChange}></InputResposta>
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
        <LabelPergunta >5. Qual curso?</LabelPergunta>
        <InputResposta value={this.state.Input4} name="Input4" onChange={this.handleInputChange}></InputResposta>
        <LabelPergunta>6. Qual a unidade de ensino?</LabelPergunta>
        <InputResposta value={this.state.Input5} name="Input5" onChange={this.handleInputChange}></InputResposta>
        <ButtonNext onClick={this.onClickFolha2}>Próxima Etapa >></ButtonNext>
      </MainContainer>
    );
    break;
    case "infoNoSup":
      containerScreen = (
      <MainContainer>
        <h2>INFORMAÇÕES GERAIS DE ENSINO</h2>
        <LabelPergunta>5. Por que você não terminou um curso de graduação?</LabelPergunta>
        <InputResposta value={this.state.Input6} name="Input6" onChange={this.handleInputChange}></InputResposta>
        <LabelPergunta>6. Você fez algum curso complementar?</LabelPergunta>
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
