import gql from 'graphql-tag';

// QUERY SYNTAX -> THIS IS A NAMED QUERY
export const POST_QUERY = gql`
  query posts {
    posts {
      id
      title
      body
    }
  }
`;
