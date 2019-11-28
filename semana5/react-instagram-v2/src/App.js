import React from 'react';
import SmallCard from './components/SmallCard/SmallCard'
import BigCard from './components/BigCard/BigCard'
import Comentario from './components/Comentario/Comentario'
import PageSection from './components/PageSection/PageSection.js'


import styled from "styled-components";


const FormContainer = styled.div`
    display: grid;
    grid-template: repeat(4,35px)/100px 200px;
    width: 300px;
    height:140px;
    justify-content: center;
    align-items:center;
    border: 1px solid gray;
   
`;
const CampoDeNome = styled.label`
    grid-row: 1/2;
    grid-column:1/2;
    display:flex;
    align-items:center;
    justify-content:flex-end; 
    
`;

const CampoDeInputNome = styled.input`
    grid-row: 1/2;
    grid-column:2/3;
    display:flex;
    align-items:center;
    justify-content:center; 
    width:175px;
    margin:5px 10px;
`;

const CampoDeUrlAvatar = styled.label`
    grid-row: 2/3;
    grid-column:1/2; 
    display:flex;
    align-items:center;
    justify-content:flex-end;  
  
`;

const CampoDeInputAvatar = styled.input`
    grid-row: 2/3;
    grid-column:2/3;
    display:flex;
    align-items:center;
    justify-content:center; 
    width:175px;
    margin:5px 10px;
`;

const CampoDeUrlPost = styled.label`
    grid-row: 3/4;
    grid-column:1/2;
    display:flex;
    align-items:center;
    justify-content:center; 
    justify-content:flex-end;
`;

const CampoDeInputPost = styled.input`
    grid-row: 3/4;
    grid-column:2/3;
    display:flex;
    align-items:center;
    justify-content:center; 
    width:175px;
    margin:5px 10px;
`;

const BotaoCadastrar = styled.button`
    grid-row: 4/5;
    grid-column:1/3;
    display:flex;
    align-items:center;
    justify-content:center;
    width:275px; 
    margin:auto;
`;

const AppDiv = styled.div`
text-align: center;
  padding: 0;
  margin: 0;
`;

class App extends React.Component {
  constructor(props){
    super(props);{
      this.state = {
        
        inputUsuario : "",
        inputAvatar : "",
        inputPost : "",
        arrPostVar: []
      }
    };
  }

addPost = () =>{
const novoArrPostCopy = [...this.state.arrPostVar];
const novoArrPost = {nomeUsuario: this.state.inputUsuario, imagemUsuario:this.state.inputAvatar, imagemPost:this.state.inputPost};
novoArrPostCopy.push(novoArrPost);



this.setState({
  arrPostVar: novoArrPostCopy
});
console.log(this.state.arrPostVar)
};


controleUsuario = e => {
  this.setState({
    inputUsuario: e.target.value
  });
};

controleAvatar = e => {
  this.setState({
    inputAvatar: e.target.value
  });
};

controlePost = e => {
  this.setState({
    inputPost: e.target.value
  });
};





render(){
  

  return (
    <AppDiv>
        <PageSection>
        <FormContainer>
            <CampoDeNome for="User">Usuário: </CampoDeNome>
            <CampoDeInputNome value={this.state.inputUsuario} onChange={this.controleUsuario} type="text" id="User"></CampoDeInputNome>
            <CampoDeUrlAvatar for="ImgAvatar">URL do Perfil: </CampoDeUrlAvatar>
            <CampoDeInputAvatar value={this.state.inputAvatar} onChange={this.controleAvatar} type="text" id="ImgAvatar"></CampoDeInputAvatar>
            <CampoDeUrlPost for="ImgPost">URL do Post: </CampoDeUrlPost>
            <CampoDeInputPost value={this.state.inputPost} onChange={this.controlePost} type="text" id="ImgPost"></CampoDeInputPost>
            <BotaoCadastrar type="button" 
            onClick={this.addPost}>Postar!</BotaoCadastrar>
        </FormContainer>
        </PageSection>

{this.state.arrPostVar.map(element =>{
  return (
    <PageSection>
    <SmallCard titulo={element.nomeUsuario} imagem={element.imagemUsuario}/>
    <BigCard imagem={element.imagemPost}/>
    <Comentario/>
  </PageSection>
  )
})}
       
     
    </AppDiv>
  );
}
}
export default App;
