import React from "react";

import styled from "styled-components";

const MainContainer = styled.div`
width:  300px;
    display: grid;
    grid-template: 50px 50px/1fr 1fr 4fr 1fr;
    border: 1px solid gray;
    
    margin: 0;
    align-items: center;
    justify-content: center;
   
    height: 50px;
`;

const Pnumerocurtidas = styled.p`
    grid-column: 2/2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Pnumeroccomentario = styled.p`
    grid-column: 4/4;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 5px;
`;

const ComentarioImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 160px;
    width: 35px;
    height: 35px;
`;

const CurtirImg = styled.img`
grid-column: 1/1;
    
    padding: 10px;
    width: 20px;
    height: 20px;
`;


const ComentarioConteiner = styled.div`
    grid-row: 2/2;
    grid-column: 1/6  ;
    display: grid;
    grid-template: 50px/220px 80px;
    border: 1px solid gray;
    border-top: 0;
    height: 50px;
    align-items: center;
`;

const ComentarioInput = styled.input`
 width: 200px;
    height: 20px;
    margin: 5px;
`;

const ComentarioButton = styled.button`
  width: 70px;
    height: 25px;
    margin: 3px;
    align-items: center;
`;





class Comentario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarComentario: false,
      curtir: "https://cdn.icon-icons.com/icons2/1347/PNG/512/likesocialheartbuttonoutline_87752.png",
      numeroCurtida:"0",
      numeroComentario:0,
      
    };
  }
  

  aoClicarCurtir = () => {
    if (this.state.curtir==="https://cdn.icon-icons.com/icons2/1347/PNG/512/likesocialheartbuttonoutline_87752.png") {
      this.setState({
        curtir: "https://cdn.icon-icons.com/icons2/1122/PNG/512/likeblackheartbutton_79537.png",
        numeroCurtida: "1"
      });
    } else {
        
      this.setState({
        curtir: "https://cdn.icon-icons.com/icons2/1347/PNG/512/likesocialheartbuttonoutline_87752.png",
        numeroCurtida: "0"
      });
    }
  };

  aoClicarComentario = () => {
    const valorInput = document.getElementById("input").value
    const numeroDeCliques = this.state.numeroComentario
    if (valorInput===""){
        this.setState({
            mostrarComentario: false,
           
          })
    }else{
        if (this.state.mostrarComentario) {
            this.setState({
              mostrarComentario: false,
              numeroComentario: numeroDeCliques+1,
            });
          } else {
            this.setState({
              mostrarComentario: true,
            });
          }
        };
    }
    

  aoClicarComentarioAbrir = () => {
    
    if (this.state.mostrarComentario) {
      this.setState({
        mostrarComentario: false,
       
        
      });
    } else {
      this.setState({
        mostrarComentario: true,
       
      });
    }
  };


  render() {
    
    return (
        
      <MainContainer>
        <CurtirImg alt="imagem" src={this.state.curtir}  onClick={this.aoClicarCurtir}/>
        <Pnumerocurtidas >{this.state.numeroCurtida}</Pnumerocurtidas>
        <ComentarioImg alt="imagem" src="https://icon-library.net/images/instagram-comment-bubble-icon/instagram-comment-bubble-icon-12.jpg" 
           onClick={this.aoClicarComentarioAbrir}/>
           
        {this.state.mostrarComentario? (<ComentarioConteiner>
            <ComentarioInput id = "input" placeholder=" Insira seu comentário"/>
            <ComentarioButton onClick={this.aoClicarComentario}>Comentar</ComentarioButton>
            </ComentarioConteiner>) : ("")}
            <Pnumeroccomentario >{this.state.numeroComentario}</Pnumeroccomentario>
      </MainContainer>
    );
  }
}

export default Comentario;
