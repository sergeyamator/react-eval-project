import React from 'react'
import PropTypes from 'prop-types'

import './Repos.scss'

function Repos ({ user }) {
  return (
    <h1>Repos</h1>
  )
}

Repos.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    bio: PropTypes.string,
    blog: PropTypes.string,
    events_url: PropTypes.string,
    followers: PropTypes.number
  })
}

export default Repos
