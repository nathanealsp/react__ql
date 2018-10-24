import gql from 'graphql-tag';

// THIS WILL CREAT A BRAND NEW POST
export const CREATE_POST = gql`
  mutation addPost {
    createPost(
      data: { status: PUBLISHED, title: "First Mutation", body: "This is my first Mutation" }
    ) {
      id
      title
      body
    }
  }
`;
