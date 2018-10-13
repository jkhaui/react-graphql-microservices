import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Post extends Component {
  render() {
    let title = this.props.post.title

    return (
      <Link className="no-underline ma1" to={`/post/${this.props.post.id}`}>
        <p className="f3 black-80 fw4 lh-solid">{title}</p>
        <p className="black-80 fw3" dangerouslySetInnerHTML={{__html: this.props.post.content}} />
      </Link>
    )
  }
}
