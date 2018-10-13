import React, { Component, Fragment } from 'react'
import Post from '../components/Post'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

export default class FeedPage extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ data, loading, error, refetch }) => {
          if (loading) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>Loading ...</div>
              </div>
            )
          }

          if (error) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>The connection has temporarily dropped out.</div>
              </div>
            )
          }

          return (
            <Fragment>
              {data.posts.nodes &&
                data.posts.nodes.map(post => (
                  <Post
                    key={post.id}
                    post={post}
                    refresh={() => refetch()}
                  />
                ))}
              {this.props.children}
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export const FEED_QUERY = gql`
 query PostsQuery {
  posts {
    nodes {
      id
      title
      content
    }
  }
}
`
