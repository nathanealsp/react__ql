import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { POST_QUERY } from '../queries/Queries';

class BlogPosts extends Component {
  render() {
    return (
      <Query query={POST_QUERY}>
        {({ loading, data }) => {
          if (!loading) {
            return (
              <ul>
                {data.posts.map(post => (
                  <StyledLink to={`post/${post.id}`} key={post.id}>
                    <BlogLi>{post.title}</BlogLi>
                  </StyledLink>
                ))}
              </ul>
            );
          }
          return <p>Loading ........</p>;
        }}
      </Query>
    );
  }
}

export default BlogPosts;

const BlogLi = styled.div`
  background: #4a148c;
  width: 350px;
  /* height: 80px; */
  color: white;
  font-size: 1.5em;
  padding: 10px;
  border-radius: 3px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
