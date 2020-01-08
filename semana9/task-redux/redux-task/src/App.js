import React from 'react';
import {
  ThemeProvider,
  DefaultTheme,
  StyleReset,
  Div,
  Icon,
  Input
} from "react-atomize";
import styled from "styled-components"


//lista de actios:

 /* 
 
* handle para controlar o input de task

* check task
* uncheck task
* delete task

* all filter
* filtrar pendentes
* filtrar completas

* check all completes
* delete all completes



 */

//action-creators

function handleInput(text) {
  return {
    type: 'HANDLE-INPUT',
    payload: {
      valor: text
    }
  }
}

function checkTask() {
  return {
    type: 'CHECK-TASK',
  }
}

function unCheckTask() {
  return {
    type: 'UNCHECK-TASK',
  }
}

function deleteTask() {
  return {
    type: 'DELETE-CHECK-TASK',
  }
}

function filterAll(array) {
  return {
    type: 'FILTER-ALL',
    payload: {
      valor: array
  }
}
}

function filterPendente(array) {
  return {
    type: 'FILTER-PENDENTE',
    payload: {
      valor: array
  }
}
}

function filterComplete(array) {
  return {
    type: 'FILTER-Complete',
    payload: {
      valor: array
  }
}
}

function checkAll() {
  return {
    type: 'check-ALL',
}
}

function deleteAllTask() {
  return {
    type: 'DELETE-ALL-TASK',
  }
}


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


function App() {
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
  );
}

export default App;
