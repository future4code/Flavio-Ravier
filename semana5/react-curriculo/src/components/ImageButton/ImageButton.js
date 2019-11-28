import React from 'react'
import './ImageButton.css'

function ImageButton(props) {
	return (
		<article className="ImageButton">
          
                <img alt="Thumbnail" src={props.imagem}></img>
                <p id="texto">{props.texto}</p>
           
		</article>
	)
}

export default ImageButton