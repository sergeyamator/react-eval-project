import React from 'react'
import PropTypes from 'prop-types'

import './Events.scss'

function Events ({ user }) {
  return (
    <h1>Events</h1>
  )
}

Events.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    bio: PropTypes.string,
    blog: PropTypes.string,
    events_url: PropTypes.string,
    followers: PropTypes.number
  })
}

export default Events
