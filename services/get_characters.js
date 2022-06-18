import { gql } from '@apollo/client'

const GET_CHARACTERS = gql`
  query Character($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        species
        location {
          name
        }
      }
  }
}`

export { GET_CHARACTERS }