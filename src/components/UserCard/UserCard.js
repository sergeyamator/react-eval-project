import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import Icon from '@material-ui/core/Icon'

import './UserCard.scss'

function UserCard ({ user }) {
  return (
    <Card styleName='user-card'>
      <CardContent>
        <h2 styleName='user-name'>
          {user.name}
          <Avatar
            alt={user.name}
            src={user.avatar_url}
          />
        </h2>
        <p>{user.bio}</p>
        <div styleName='chips'>
          <Chip label={`followers: ${user.followers}`} variant='outlined' />
          <Chip label={`following: ${user.following}`} variant='outlined' />
          <Chip label={`public_gists: ${user.public_gists}`} variant='outlined' />
          <Chip label={`public_repos: ${user.public_repos}`} variant='outlined' />
        </div>
        <div styleName='links-wrapper'>
          <p styleName='links-title'>Please, visit my pages</p>
          <div styleName='links'>
            <a href={user.html_url} target='_blank'>
              Github
              <Icon>account_circle</Icon>
            </a>
            <a href={user.repos_url} target='_blank'>
              Repositories
              <Icon>list</Icon>
            </a>
            <a href={user.subscriptions_url} target='_blank'>
              Subscriptions
              <Icon>how_to_reg</Icon>
            </a>
            <a href={user.blog} target='_blank'>
              Blog
              <Icon>book</Icon>
            </a>

          </div>
        </div>
      </CardContent>
    </Card>
  )
}

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    bio: PropTypes.string,
    blog: PropTypes.string,
    events_url: PropTypes.string,
    followers: PropTypes.number
  })
}

export default UserCard
