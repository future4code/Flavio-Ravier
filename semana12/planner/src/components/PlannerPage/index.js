import React, { Component } from "react";
import styled from "styled-components";
import Post from "./../../containers/Post/index";
import Planner from "./../../containers/Planner";
import { connect } from "react-redux";


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


export class PlannerPage extends Component {
	render(){
    return (
      <PlannerWrapper>
        <Post></Post>
        <Planner></Planner>
      </PlannerWrapper>
    )
  }
    	
}
export default connect()(PlannerPage);
