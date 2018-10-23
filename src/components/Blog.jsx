import React, { Component } from 'react';
import styled from 'styled-components';

class Blog extends Component {
  render() {
    const { title, body } = this.props.blogData;
    return (
      <BlogWrapper>
        <div className="blog_title">{title}</div>
        <div className="blog_body">{body}</div>
      </BlogWrapper>
    );
  }
}

export default Blog;

const BlogWrapper = styled.div`
  width: 330px;
  background: #222;
  height: 80px;
  display: grid;
  grid-template-rows: 30px 1fr;
  border-radius: 3px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  .blog_title {
    padding: 8px;
    font-size: 1.5em;
  }
  .blog_body {
    padding: 8px;
    font-size: 1em;
  }
`;
