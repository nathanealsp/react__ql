import gql from 'graphql-tag';

// THIS WILL CREAT A BRAND NEW POST
export const CREATE_POST = gql`
  # DEFINE VARIABLES AND ASSIGNING TYPE
  mutation createPost($title: String!, $body: String!) {
    # DATA OBJ
    createPost(data: { status: PUBLISHED, title: $title, body: $body }) {
      id
      title
      body
    }
  }
`;
