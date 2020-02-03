import React, { Component } from "react";
import styled from "styled-components";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const TaskCardWrapper = styled(Paper)`
  width: 130px;
  height: 80px;
  justify-content: space-evenly;
  justify-items: center;
  align-items:top;
  text-align:center;
  display: flex;
  flex-direction:column;
  margin-top:10px;
  padding:5px;
`;

export class TaskCard extends Component {

    render() {
        return (
            <TaskCardWrapper>
                <Typography variant="overline" color="primary" component="h5">
                    {this.props.taskText}
                   
                </Typography>
            </TaskCardWrapper>
        )
    }
}
export default (TaskCard)