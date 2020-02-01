import React, { Component } from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import {
  Divider,
  Card,
  CardContent,
  Typography,
  Avatar,
  TextField,
  CardActions,
  Button
} from "@material-ui/core";
import { createPost } from '../../actions/post';

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
`;

const ContentWrapper = styled(CardContent)`
  display: flex;
  align-items: flex-end;
`;

const SyledAvatar = styled(Avatar)`
  margin-right: 10px;
`;

const ActionsWrapper = styled(CardActions)`
  display: flex;
  justify-content: flex-end;
`;

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postValue: ""
    };
  }

  onChangePost = event => {
    this.setState({ postValue: event.target.value });
  };

  onCreatePost = () => {
    this.props.createPost(this.state.postValue)
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <Typography>Criar publicação</Typography>
        </CardHeader>
        <Divider />
        <ContentWrapper>
          <SyledAvatar />
          <TextField
            label={"No que você está pensando?"}
            fullWidth
            multiline
            onChange={this.onChangePost}
            value={this.state.postValue}
          />
        </ContentWrapper>
        <Divider />
        <ActionsWrapper>
          <Button
            variant={"contained"}
            color={"primary"}
            onClick={this.onCreatePost}
          >
            Enviar
          </Button>
        </ActionsWrapper>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)),
})

export default connect(null, mapDispatchToProps)(PostForm)
