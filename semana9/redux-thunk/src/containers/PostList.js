import React from "react";
import PostCard from "./PostCard/PostCard";
import { connect } from "react-redux";

class PostsList extends React.Component {
    render () {
        return this.props.postsList.map(post => (<PostCard post={post} />));
    }
}

const mapStateToProps = (state) => ({
    postList: state.posts.allPosts,
})

export default connect()(PostsList)