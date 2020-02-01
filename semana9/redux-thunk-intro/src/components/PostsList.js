import React from "react";
import { connect } from 'react-redux';
import PostCard from "./PostCard/PostCard";
import { getPosts } from '../actions/post'

class PostsList extends React.Component {

  componentDidMount(){
    this.props.getAllPosts();
  }

  render() {
    return this.props.postsList.map(post => (<PostCard post={post} />)
    );
  }
}

const mapStateToProps = (state) => ({
  postsList: state.posts.allPosts,
});

const mapDispatchToProps = (dispatch) => ({
  getAllPosts: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
