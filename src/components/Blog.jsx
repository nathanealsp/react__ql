import React, { Component } from 'react';
import styled from 'styled-components';

import { Query } from 'react-apollo';
import { POSTONE_QUERY } from '../queries/Queries';

class Blog extends Component {
  render() {
    console.log(this.props.match.params.id);
    const { id } = this.props.match.params;
    return (
      <Query query={POSTONE_QUERY} variables={{ id }}>
        {({ loading, data }) => {
          console.log(data);
          if (!loading) {
            const { title, body } = data.post;
            return (
              <BlogWrapper>
                <div className="blog_title">{title}</div>
                <div className="blog_body">{body}</div>
              </BlogWrapper>
            );
          }
          return <p>Loading ........</p>;
        }}
      </Query>
    );
  }
}

export default Blog;

const BlogWrapper = styled.div`
  margin: 10px 0;
  padding: 10px;
  width: 550px;
  background: #7e57c2;
  height: 320px;
  display: grid;
  border-radius: 3px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  .blog_title {
    background: #ede7f6;
    text-align: center;
    border-radius: 3px;
    padding: 10px;
    font-size: 1.5em;
    height: 50px;
    color: black;
  }
  .blog_body {
    padding: 8px;
    font-size: 1em;
    height: 250px;
  }
`;
