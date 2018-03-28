import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import About from './About'

export default class Home extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
          <div>
          <h1>Hey Participant! Welcome to my awesome site</h1>
          <img src='https://sbsfinancials.com/wp-content/uploads/2017/03/cropped-Turtle-logo-MC-Final-with-tagline1200x527bluer-1-768x337.png' />
          <h1>This site is so cool</h1>

          <Link to={'/About'}>About</Link>

          <p>super secret links</p>
          <Link to={'/Transamerica'}>Transamerica</Link>
          <br />
          <Link to={'/Principal'}>Principal</Link>
          </div>
        )
    }
}
