import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { POST_QUERY } from '../queries/Queries';
import Blog from './Blog';

class BlogPosts extends Component {
  render() {
    return (
      <Query query={POST_QUERY}>
        {({ loading, data }) => {
          if (!loading) {
            console.log('Heyy', { ...data });
            return <ul>{data.posts.map(post => <Blog key={post.id} blogData={post} />)}</ul>;
          }
          return <p>Loading ........</p>;
        }}
      </Query>
    );
  }
}

export default BlogPosts;
