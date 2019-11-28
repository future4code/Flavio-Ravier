import React from 'react'
import styled from "styled-components";

const ArticleBigCard = styled.article`
	width:  300px;
    border: 1px solid gray;
    border-bottom: 0;
    text-align: justify;
    margin: 0;
    height: 250px;
`;

const ImagemBigCard = styled.img`
	width: 100%;
	height: 100%;
	`;
	




function BigCard(props) {
	return (
		<ArticleBigCard>
          
                <ImagemBigCard alt="Thumbnail" src={props.imagem}></ImagemBigCard>
               
           
		</ArticleBigCard>
	)
}

export default BigCard