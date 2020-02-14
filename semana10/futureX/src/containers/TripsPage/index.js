import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import {routes} from "../Router/index"
import Header from "../Layouts/Header"
import { Grid } from 'material-ui'
import Footer from "../Layouts/Footer";
import Typography from "@material-ui/core/Typography"

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const Hh = styled.h1`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-align:center;
color:#002642;
margin-top:50px;

`;

const ContainerCards = styled.div`
margin:30px 150px;
display:flex;
flex-wrap:wrap;
flex-direction:row;
justify-content:center;

`;

class TripsPage extends Component {
  constructor(props) {
    super(props);
   
    };
  
  render() {

    return (    
    <Grid container direction={'column'}>
        <Grid item >
            <Header/>
        </Grid>
        <Grid item alignItens={'center'} justify={'center'} >
            <Hh>user admin space</Hh>
        </Grid>
        <ContainerCards>
              <Card onClick={this.props.goToList} style={{ marginLeft:30, marginTop:10, marginBottom:10, width:200, height:325}}>
                <CardActionArea>
                  <CardMedia
                    height="150"
                    component="img"
                    image="https://cdn3.iconfinder.com/data/icons/flatty-series-3/512/checklist_schedule_task_agenda_check_mark_paper_list_planning_todo_flat_icon_illustration-512.png"
                    title="List"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Listas de Aplicações
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Visualize a lista com todas as Viagens e o status.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card onClick={this.props.goToManage} style={{ marginLeft:30, marginTop:10, marginBottom:10, width:200, height:325}}>
                <CardActionArea>
                  <CardMedia
                    height="150"
                    component="img"
                    image="https://www.pngitem.com/pimgs/m/26-268998_link-to-manage-travel-problem-solving-skills-icon.png"
                    title="Manage"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Gerenciamento
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Aprove ou desaprove as solicitações de viagens intergaláticas.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card> 
              <Card onClick={this.props.goToCreate} style={{ marginLeft:30, marginTop:10, marginBottom:10, width:200, height:325}}>
                <CardActionArea>
                  <CardMedia
                    height="150"
                    component="img"
                    image="https://previews.123rf.com/images/axivector/axivector1707/axivector170700085/82728219-space-travel-vector-illustration-cosmos-discovery-and-exploration-poster-doodle-style-cartoon-design.jpg"
                    title="Create"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Criar Viagens
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Crie novas viagens intergalaticas.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card> 
        </ContainerCards>
        <Grid item alignItens={'flex-end'} justify={'flex-end'}>
            <Footer></Footer>
        </Grid>
    </Grid>
    );
  }
}
   
function mapToDispatch(dispatch) {
  return {
    goToList: () => dispatch(push(routes.trips_list)),
    goToManage: () => dispatch(push(routes.trips_manage)),
    goToCreate: () => dispatch(push(routes.trips_create))
  }
}


export default connect(
  null,
  mapToDispatch)(TripsPage);



  
 
  
  