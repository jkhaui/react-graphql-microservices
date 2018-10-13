import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import FeedPage from './components/FeedPage'
import DetailPage from './components/DetailPage'

import 'tachyons'
import './index.css'

// Replace the GraphQL endpoint below with your own.
const client = new ApolloClient({ uri: 'https://opensource.market/graphql' })

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Fragment>
        <div className="fl w-100 pl4 pr4">
          <Switch>
            <Route exact path="/" component={FeedPage} />
            <Route path="/post/:id" component={DetailPage} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  </ApolloProvider>,
  document.getElementById('react_graphql_container'),
)
