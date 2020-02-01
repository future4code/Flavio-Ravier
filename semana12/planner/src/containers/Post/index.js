import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {createNewTask} from './../../actions/task'


const CreatePostContainer = styled.form`
  background-color:rgb(255, 255, 255);
  border-radius: 4px;
  border: 1px solid rgb(204, 204, 204);
  width: 400px;
  display: flex;
  margin-bottom: 30px;
  padding: 8px;
  justify-content:space-evenly;
`;

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
          text: '',
          day: ''
        }
    }
    
    handleOnSubmit = event => {
        event.preventDefault();
        if (this.state.text !== '' && this.state.day !== '') {
          const task = {
            text: this.state.text,
            day: this.state.day
          }
          this.props.createTask(task)
          this.setState({ text: '', day: '' })
        }
      };

    handleFieldChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
      };

    render() {
        return (
            <CreatePostContainer onSubmit={this.handleOnSubmit}>
                <div>
                <Select
                    labelId="select-day-week" 
                    id="simple-select"
                    fullWidth
                    name="day"
                    value={this.state.day}
                    onChange={this.handleFieldChange} 
                    
                    >
                    <MenuItem value={"Monday"}>Monday</MenuItem>
                    <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                    <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                    <MenuItem value={"Thursday"}>Thursday</MenuItem>
                    <MenuItem value={"Friday"}>Friday</MenuItem>
                    <MenuItem value={"Saturday"}>Saturday</MenuItem>
                    <MenuItem value={"Sunday"}>Sunday</MenuItem>
                </Select>
                <TextField
                    name="text"
                    placeholder="Create Task"
                    multiline
                    rows="2"
                    variant="standard"
                    fullWidth
                    onChange={this.handleFieldChange}
                    value={this.state.text}
                />
                </div>
                <Button type="submit" style={{ marginLeft:"20px"}} >Post!</Button>   
            </CreatePostContainer>
        )    
    }
}
function mapToDispatch(dispatch) {
    return{
      createTask: (taskContent) => dispatch(createNewTask(taskContent)),
    }
  }

export default connect(null, mapToDispatch)(Post)
