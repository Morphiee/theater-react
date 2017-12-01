import React, { Component } from 'react';
import Shows from './show.js'

export default class Cards extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shows: [
        {
          name: "Home",
          link: "#"
        },
        {
          name: "What's playing?",
          link: "#"
        }
      ]
    }
  }
  render() {
    return(
      <div>
        <Shows home={this.state.shows} />
      </div>
    )
  }
}
