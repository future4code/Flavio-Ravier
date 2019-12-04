import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types'
/* import AdicionarTarefa from 'Flavio-Ravier/semana6/lista-tarefas/components/AdicionarTarefa/index.js'
 */


const MainContainer = styled.div`
    width:  500px;
    display: flex;
    flex-direction:column;
    margin: auto;
    align-items: center;
    justify-content: flex-start;
    height:100vh; 
    box-sizing:border-box;
`;

const TituloH2 = styled.h1`
height:30px;
margin:30px 0;
`;

const ContainerAdicionar =styled.div`
display:flex;
justify-content:center;
align-items:center;
height:30px;
`;

const InputTarefa = styled.input`
  height:15px;
  width:45%;

`;

const ButtonAdd = styled.button`
margin:auto;
width:45%;
height:20px;
`;

const ContainerFiltro =styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top: 5px;

`;

const LabelFiltro = styled.label`
height:30px;
margin-right:15px;
`;

const SelectFiltro = styled.select`
  margin:10px 0;
  height:30px;
`;

const ContainerLista =styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top: 5px;

`;



const ContainerStatus =styled.div`

/* fazer condicional */

background-color:${({status}) =>{
  if(status === "pendente"){
    return 'yellow'
  } else {
    return 'green'
  }

}};

width:3px;
border:1px solid grey;
border-right:0;
height:22px;
`;

const ContainerMensagem = styled.div`
text-align:left;
border:1px solid grey;
border-left:0;
width:250px;
padding-left:5px;
`;

const ContainerFooter = styled.div`
background-color: #F9F9F9;
position:fixed;
bottom:0;
width:100%;
display:flex;
align-items:center;
justify-content:center;
height:10vh;

`;
const Legenda = styled.p`
font-weight:bold;
font-size:20px;
margin-right:30px;
`;

class App extends React.Component {
  
  constructor(props){
		super(props);
		this.state = {
      inputTarefa:"",
      selectFiltro:"Nenhum",
      estadoStatus :"pendente" ,
      arrTarefas:[],
      id:"",
		}  
	}
  
/* 
Adicionar Tarefa */

controleTarefa = e => {
  this.setState({
    inputTarefa: e.target.value
  });
};

controleFiltro = e => {
  this.setState({
    selectFiltro: e.target.value
  });
};

/* 
Mudar Status */



addTarefa = () =>{
  
  if(this.state.inputTarefa !==""){
    const arrTarefasDefinidor = {valorTarefa:this.state.inputTarefa , valorFiltro: this.state.selectFiltro,valorStatus: this.state.estadoStatus,valorId:Date.now()}
    const arrTarefasCopia = [...this.state.arrTarefas,arrTarefasDefinidor]
  
    this.setState({
      arrTarefas : arrTarefasCopia
    });
    this.setState({
      inputTarefa:""
    });
  } else{
    alert("Não deixe o campo de tarefa vazio, Obrigado!")
  }
}


/* 
Mudar estado */

mudarStatus = (e) => {

this.state.arrTarefas.map(item =>{
if(item.valorId === e){
  if(item.valorStatus ==="pendente"){
    item.valorStatus = "completo"
  } else {
    item.valorStatus = "pendente"
  }
}
}

)
 this.forceUpdate() 
}

  


  render(){
  return (
    <MainContainer>
      <TituloH2>Lista de Tarefas</TituloH2>
      <ContainerAdicionar>
        <InputTarefa value={this.state.inputTarefa} onChange={this.controleTarefa}></InputTarefa>
        <ButtonAdd onClick={this.addTarefa}>Adicionar</ButtonAdd>
      </ContainerAdicionar>
      <ContainerFiltro>
      <LabelFiltro>Filtro: </LabelFiltro>
        <SelectFiltro value={this.state.selectFiltro} onChange={this.controleFiltro}>
          <option value="Nenhum">Nenhum</option>
          <option value="Pendente">Pendente</option>
          <option value="Completo">Completo</option>
        </SelectFiltro>
      </ContainerFiltro>

{this.state.arrTarefas.map(element =>{
  
  return (
    <ContainerLista onClick={() => {this.mudarStatus(element.valorId)}} key={element.valorId}>
      <ContainerStatus status={element.valorStatus}></ContainerStatus>
      <ContainerMensagem >{element.valorTarefa}</ContainerMensagem>
    </ContainerLista>
  )
})}

      <ContainerFooter>
        <Legenda>LEGENDA: </Legenda>
        <ContainerStatus status="pendente"></ContainerStatus>
        <ContainerMensagem >PENDENTE</ContainerMensagem>
        <ContainerStatus status="completo"></ContainerStatus>
        <ContainerMensagem >COMPLETO</ContainerMensagem>
      </ContainerFooter>
    </MainContainer>
    
  );
}
}

export default App;
