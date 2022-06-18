import { gql } from '@apollo/client'

const GET_CHARACTERS_ID = gql`
query CharactersByIds($ids: [ID!]!) {
    charactersByIds(ids : $ids) {
    id
    name
    status
    image
    species
    gender
    origin{
      name
    }
  }
}`

export { GET_CHARACTERS_ID }