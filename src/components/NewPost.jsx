import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { CREATE_POST } from '../queries/Mutations';
import PostForm from './PostForm';

class NewPost extends Component {
  render() {
    return (
      <Mutation mutation={CREATE_POST}>
        {createPost => <PostForm onSubmitHandler={createPost()} />}
      </Mutation>
    );
  }
}

export default NewPost;

// THE MUTATION HAS THE createPost FUNCTION COMING IN AS PROPS
// WE USE RENDERPROPS TO HAVE ACCESS TO IT AND PASS IT AS A PROP TO THE NEW POST FORM WHERE WE ADD VALUES TO IT.
