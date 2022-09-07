import React, { Component } from 'react'

import './HeroStyles.css'

// We Made thihs Component so Each Page will have the same Image with different title
// Otherwise multiple components would be made, so this way is best practice

class Hero extends Component {
  render() {
    return (
      <div className='hero-img'>
        <div className='heading'>
            {/* Props used to pass in data */}
            <h1>
                {this.props.heading}
            </h1>

            <p>
                {this.props.text}
            </p>

        </div>
      </div>
    )
  }
}

export default Hero