import React from 'react';
import styled from "styled-components"
import axios from 'axios'

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items:center;
`; 

 const H2Titulo = styled.h2`
    text-align: center;
    margin-top:75px;
    border-bottom:1px solid grey;
    padding:5px;
 `;

 const SpanX = styled.span`
    margin-left:150px;
  
 `;

const url = 'https://us-central1-future4-users.cloudfunctions.net/api'
const token = 'bat-ravi'

class ContainerLista extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allUsersList:[]
        }
    } 
componentDidMount(){
    this.getAllUserslist();
}
getAllUserslist = () =>{
    
    const request = axios.get(`${url}/users/getAllUsers`, {
        headers: {
            "api-token": token
        }
    });
    request.then(response => {
        const allUsers = response.data.result
        this.setState({ allUsersList:allUsers})
        console.log(allUsers)
    })
}

handleOnClickDelete = (taskId) => {
    console.log(taskId)

    const axiosConfig = {
        headers: {
            "api-token": "bat-ravi",
        }
    }

    axios.delete(`${url}/users/deleteUser?id=${taskId}`, axiosConfig).then((a) =>{
        window.alert("Tudo ok! Status: "+a.status)
        this.getAllUserslist();
    }).catch((error)=>{
        window.alert(error)
    })
} 


    render(){
        return(
          <MainContainer>
            <H2Titulo>Lista Cadastrada</H2Titulo>
            <ul>
                {this.state.allUsersList.map(user =>(
                    <li>{user.name}<SpanX onClick={() => {this.handleOnClickDelete(user.id)}}>X</SpanX></li>
                ))}
            </ul>
        </MainContainer>
      ) 
    }
  }
  export default ContainerLista;