import React from "react";
import styled from "styled-components";
import Post from "./../../containers/Post/index"
import Planner from "./../../containers/Planner"

const PlannerWrapper = styled.div`
  width: 100%;
  height: 70vh;
  gap: 30px;
  place-content: top;
  justify-items: center;
  align-items:center;
  display: flex;
  flex-direction: column;
  margin-top:30px;
`;


function PlannerPage() {
	
    	return (
    		<PlannerWrapper>
				<Post></Post>
				<Planner></Planner>
    		</PlannerWrapper>
    	)
  	
}

export default PlannerPage;
