import React from 'react'

import styled from "styled-components";

const SmallCardImg = styled.img`
display: grid;
    justify-content: flex-end;
    align-items: flex-end;
    width: 35px;
    height: 35px;
    padding: 3px 15px;
`;

const ArticleSmallCard = styled.article`
	width:  300px;
	display: flex;
	flex-direction: row;
    border: 1px solid gray;
    border-bottom: 0;
    text-align: justify;
    margin: 0;
    align-items: center;
   justify-content: flex-start;
   
    height: 50px;
`;


function SmallCard(props) {
	return (
		<ArticleSmallCard>
          
                <SmallCardImg alt="Thumbnail" src={props.imagem}></SmallCardImg>
                <p >{props.titulo}</p>
           
		</ArticleSmallCard>
	)
}

export default SmallCard