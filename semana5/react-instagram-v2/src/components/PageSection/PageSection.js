import React from 'react'
import styled from "styled-components";

const PageSectionDiv = styled.div`
	padding-top: 100px;
	display: grid;
	grid-template: 1fr/1fr;
	padding-top: 10px;
	padding-bottom: 50px;
	justify-items: center;
	row-gap: 0;
`;

function PageSection(props) {
	return(
		<PageSectionDiv>
			{props.children}
		</PageSectionDiv>
	) 
}

export default PageSection