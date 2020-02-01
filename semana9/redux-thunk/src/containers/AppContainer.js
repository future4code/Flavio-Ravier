import React from 'react'
import PostForm from "./PostForm/PostForm";
import PostsList from "./PostsList";
import styled from "styled-components";
import AppContainer from "./AppContainer";

const Container = styled.div`
    display: grid;
    grid-template-columns: 400px;
    justify-content: center;
    gap:15px;
`;



class AppContainer extends React.Component {
    render() {
        return (
            <Container>
                <PostForm />
                <PostsList postsList = {posts}/>
            </Container>
        );
    }
}

export default AppContainer;