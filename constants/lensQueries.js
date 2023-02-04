import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export const client = new ApolloClient({
    uri: "https://api.lens.dev",
    cache: new InMemoryCache()
  })

export const LENS_QUERY = gql`
query ExploreProfiles {
  exploreProfiles(request: { sortCriteria: MOST_FOLLOWERS }) {
    items {
      id
      name
      bio
      handle
      picture {
        ... on MediaSet {
          original {
            url
          }
        }
      }
      stats {
        totalFollowers
      }
    }
  }
}
`
