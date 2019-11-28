import React from "react";
import "./Comentario.css";

/* function ParaMostrarComentario(mostra) {
  if (mostra) {
    return (<div id="container-comentario">
            <input placeholder="Insira seu comentário"/>
            <button>Comentar</button>
            </div>
    )
  }
} */

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
    if (valorInput==""){
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
        
      <div className="Container">
        <img alt="imagem" id="curtir" src={this.state.curtir}  onClick={this.aoClicarCurtir}/>
        <p id="numero-curtidas">{this.state.numeroCurtida}</p>
        <img alt="imagem" src="https://icon-library.net/images/instagram-comment-bubble-icon/instagram-comment-bubble-icon-12.jpg" id="comentario"
           onClick={this.aoClicarComentarioAbrir}/>
           
        {this.state.mostrarComentario? (<div id="container-comentario">
            <input id="input" placeholder="Insira seu comentário"/>
            <button onClick={this.aoClicarComentario}>Comentar</button>
            </div>) : ("")}
            <p id="numero-comentario">{this.state.numeroComentario}</p>
      </div>
    );
  }
}

export default Comentario;
