import React, { Component } from 'react';
import Shows from './show.js'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shows: [
        {
          name: "Home",
          link: "#"
        },
        {
          name: "Shows",
          link: "#"
        },
        {
          name: "About",
          link: "#"
        },
        {
          name: "Contact",
          link: "#"
        },
        {
          name: "Tickets",
          link: "#"
        },
        {
          name: "Support",
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
