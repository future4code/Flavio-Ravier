import React from 'react'
import './BigCard.css'

function BigCard(props) {
	return (
		<article className="BigCard">
          
                <img alt="Thumbnail" src={props.imagem}></img>
                <p id="titulo"><b>{props.titulo}</b></p><p id="texto">{props.texto}</p>
           
		</article>
	)
}

export default BigCard