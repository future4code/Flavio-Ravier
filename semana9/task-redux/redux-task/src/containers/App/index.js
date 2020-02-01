import React from "react";
import { connect } from "react-redux";

//actions creator
import {checkAllAction} from "./../../actions/checkAll"
import {checkTaskAction} from "./../../actions/checkTask"
import {deleteAllAction} from "./../../actions/deleteAll"
import {deleteTask} from "./../../actions/deleteTask"
import {filterAllAction} from "./../../actions/filterAll"
import {filterCompleteAction} from "./../../actions/filterComplete"
import {filterPendingAction} from "./../../actions/filterPending"
import {handleInputTaskAction} from "./../../actions/handleInputTask"
import {unCheckTaskAction} from "./../../actions/unCheckTask"

import styled from "styled-components"
import {
  ThemeProvider,
  DefaultTheme,
  StyleReset,
  Div,
  Icon,
  Input
} from "react-atomize";

const Text1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items:center;
    font-weight:bolder;
    font-size:7em;
    color:white;
    margin:30%;
`; 

const Text2 = styled.p`
    text-decoration:line-through;
`;

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      brand500: "#553EB5",
    },
    rounded: {
      ...DefaultTheme.rounded,
      brandRadius: "20px"
    },
  };

const App = props => {


return (
<ThemeProvider theme={theme}>
      <Div p="1rem" align="center" d="flex" flexDir="column">
        <StyleReset />
        <Div d="flex" m={{ b: "4rem" }}>
          <Div
            h="6rem"
            w="5.5rem"
            m={{ r: "1rem" }}
            rounded="brandRadius"
            bg="brand800"
          ><Text1>4</Text1></Div>
          <Div
            h="6rem"
            w="5.5rem"
            m={{ r: "1rem" }}
            rounded="brandRadius"
            bg="info700"
          ><Text1>T</Text1></Div>
          <Div
            h="6rem"
            w="5.5rem"
            m={{ r: "1rem" }}
            rounded="brandRadius"
            bg="success700"
            ><Text1>A</Text1></Div>
          <Div
            h="6rem"
            w="5.5rem"
            m={{ r: "1rem" }}
            rounded="brandRadius"
            bg="warning700"
            ><Text1>S</Text1></Div>
          <Div
            h="6rem"
            w="5.5rem"
            m={{ r: "1rem" }}
            rounded="brandRadius"
            bg="danger700"
            ><Text1>K</Text1></Div>
        </Div>




        <Div  align="center" d="flex" flexDir="column">
          <Div m={{b:'15px'}}>
            <Input rounded="0" w="450px" placeholder="O que tem que ser feito?" />  
          </Div>
          <Div w="450px" h="2.5rem" border="1px solid" borderColor="gray500" d="flex" flexDir="row">
             <Div justify="center" align="center" d="flex"  p={{x:'7px'}} w="10%"> <Icon name="Checked" size="20px" /></Div>
             <Div justify="flex-start" align="center" d="flex"  p={{x:'7px'}} w="80%"> <Text2>Tarefa Executada</Text2></Div>
             <Div justify="center" align="center" d="flex"  p={{x:'7px'}} w="10%"> <Icon name="Delete" size="20px" /></Div>
          </Div>
          <Div w="450px" h="2.5rem" border="1px solid" borderColor="gray500" d="flex" flexDir="row">
             <Div justify="center" align="center" d="flex"  p={{x:'7px'}} w="10%"> <Icon name="RBUnchecked" size="20px" /></Div>
             <Div justify="flex-start" align="center" d="flex"  p={{x:'7px'}} w="80%"> Tarefa não Executada</Div>
             <Div justify="center" align="center" d="flex"  p={{x:'7px'}} w="10%"> <Icon name="Delete" size="20px" /></Div>
          </Div>
          <Div m={{t:'15px'}} w="450px" h="2.5rem" border="1px solid" borderColor="gray500" d="flex" flexDir="row">
             <Div justify="flex-start" align="center" d="flex"  p={{l:'7px'}} w="35%"><Icon name="RBUnchecked" size="20px" /> <Div p="10px"> Marcar todas </Div></Div>
             <Div w='65%' d='flex' justify='center' flexDir="row">
                <Div  justify="center" align="center" d="flex"   w="15%"> Todas</Div>
                <Div  justify="center" align="center" d="flex"   w="30%">Completas</Div>
                <Div  justify="center" align="center" d="flex"   w="30%"> Pendentes </Div>
                <Div  justify="center" align="center" d="flex"   w="30%"> <Icon name="Delete" size="20px" /> Completas</Div>
             </Div> 
          </Div>
        </Div>
      </Div> 
    </ThemeProvider>
)
}

const mapStateToProps = state => {
    return {
      /* selectedLanguage: state.languages.selectedLanguage,
      selectedPlanet: state.planets.selectedPlanet */
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      /* changePlanet: planet => dispatch(changePlanetAction(planet)) */
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);



