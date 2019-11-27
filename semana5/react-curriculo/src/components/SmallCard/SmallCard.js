import React from 'react'
import './SmallCard.css'

function SmallCard(props) {
	return (
		<article className="SmallCard">
          
                <img alt="Thumbnail" src={props.imagem}></img>
                <p id="titulo"><b>{props.titulo}</b></p><p id="texto">{props.texto}</p>
           
		</article>
	)
}

export default SmallCard