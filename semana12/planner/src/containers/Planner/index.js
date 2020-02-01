import React, { Component } from "react";
import styled from "styled-components";
import TaskCard from "./../../components/TaskCard"
import Divider from '@material-ui/core/Divider'
import { connect } from "react-redux";
import { getAllTasks } from '../../actions/task';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const PlannerWrapper = styled.div`
  width: 100%;
  height: auto;
  gap: 30px;
  justify-content: space-evenly;
  justify-items: center;
  align-items:top;
  display: grid;
  grid-template: 1fr / minmax(100px,1fr) 1px minmax(100px,1fr) 1px minmax(100px,1fr) 1px minmax(100px,1fr) 1px minmax(100px,1fr) 1px minmax(100px,1fr) 1px minmax(100px,1fr);
  margin-top:30px;
`;

const LoadingContainer = styled.div`
  width: 100%;
  margin: 100px 0;
  text-align: center;
`;

const DayDiv = styled.div`
    width: 140px;
    height: 400px;
    gap: 30px;
    justify-content: top;
    align-items: center;
    margin:30px; 
    display:flex;
    flex-direction: column;
    margin-bottom:0;
`;


class Planner extends Component {
    

    componentDidMount() {
        this.props.getTaskList()
    }

    render() {
         return (
            <PlannerWrapper>
                
                <DayDiv>
                    <Typography style={{margin:"0 0 15px 0"}} variant="h5" color="secondary" component="h5">
                        Segunda
                    </Typography>
                    {this.props.loadingStatus ?
                        (<LoadingContainer>
                            <CircularProgress />
                        </LoadingContainer>) :
                        this.props.listOfMon.map( task => (
                            <TaskCard key={task.id} taskText={task.text} />
                        ))}
                </DayDiv>
                <Divider orientation="vertical"/>
                <DayDiv>
                    <Typography style={{margin:"0 0 15px 0"}}  variant="h5" color="secondary" component="h5">
                        Terça
                    </Typography>
                    {this.props.loadingStatus ?
                        (<LoadingContainer>
                            <CircularProgress />
                        </LoadingContainer>) :
                        this.props.listOfTue.map( task => (
                            <TaskCard key={task.id} taskText={task.text} />
                        ))}
                </DayDiv>
                <Divider orientation="vertical"/>
                <DayDiv>
                    <Typography style={{margin:"0 0 15px 0"}}  variant="h5" color="secondary" component="h5">
                        Quarta
                    </Typography>
                    {this.props.loadingStatus ?
                        (<LoadingContainer>
                            <CircularProgress />
                        </LoadingContainer>) :
                        this.props.listOfWed.map( task => (
                            <TaskCard key={task.id} taskText={task.text} />
                        ))}
                </DayDiv>
                <Divider orientation="vertical"/>
                <DayDiv>
                    <Typography style={{margin:"0 0 15px 0"}}  variant="h5" color="secondary" component="h5">
                        Quinta
                    </Typography>
                    {this.props.loadingStatus ?
                            (<LoadingContainer>
                                <CircularProgress />
                            </LoadingContainer>) :
                            this.props.listOfThu.map( task => (
                                <TaskCard key={task.id} taskText={task.text} />
                            ))}
                </DayDiv>
                <Divider orientation="vertical"/>
                <DayDiv>
                    <Typography style={{margin:"0 0 15px 0"}}  variant="h5" color="secondary" component="h5">
                        Sexta
                    </Typography>
                    {this.props.loadingStatus ?
                        (<LoadingContainer>
                            <CircularProgress />
                        </LoadingContainer>) :
                        this.props.listOfFri.map( task => (
                            <TaskCard key={task.id} taskText={task.text} />
                        ))}
                </DayDiv>
                <Divider orientation="vertical"/>
                <DayDiv>
                    <Typography style={{margin:"0 0 15px 0"}}  variant="h5" color="secondary" component="h5">
                        Sábado
                    </Typography>
                    {this.props.loadingStatus ?
                        (<LoadingContainer>
                            <CircularProgress />
                        </LoadingContainer>) :
                        this.props.listOfSat.map( task => (
                            <TaskCard key={task.id} taskText={task.text} />
                        ))}
                </DayDiv>
                <Divider orientation="vertical"/>
                <DayDiv>
                    <Typography style={{margin:"0 0 15px 0"}}  variant="h5" color="secondary" component="h5">
                        Domingo
                    </Typography>
                    {this.props.loadingStatus ?
                        (<LoadingContainer>
                            <CircularProgress />
                        </LoadingContainer>) :
                        this.props.listOfSun.map( task => (
                            <TaskCard key={task.id} taskText={task.text} />
                        ))}
                </DayDiv>
            </PlannerWrapper>
        )
        

    }
}

function mapStateToProps(state) {
    return {
        listOfMon: state.tasks.mon,
        listOfTue: state.tasks.tue,
        listOfWed: state.tasks.wed,
        listOfThu: state.tasks.thu,
        listOfFri: state.tasks.fri,
        listOfSat: state.tasks.sat,
        listOfSun: state.tasks.sun,

        loadingStatus: state.tasks.isLoading,
    }
}

function mapToDispatch(dispatch) {
    return{
        
        getTaskList: () => dispatch(getAllTasks()),
    
    }
}
    

export default connect(mapStateToProps, mapToDispatch)(Planner)