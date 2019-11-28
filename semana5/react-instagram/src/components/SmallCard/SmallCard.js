import React from 'react'
import './SmallCard.css'

function SmallCard(props) {
	return (
		<article className="SmallCard">
          
                <img alt="Thumbnail" src={props.imagem}></img>
                <p id="titulo">{props.titulo}</p>
           
		</article>
	)
}

export default SmallCard