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

export const POSTONE_QUERY = gql`
  query post($id: ID!) {
    post(where: { id: $id }) {
      title
      body
    }
  }
`;
