import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'

import './header.scss'

const menu = [
  'Repos',
  'Events'
]

function Header ({user}) {
  return (
    <div styleName='header'>
      <List styleName='list'>
        {menu.map((item) => (
          <ListItem key={item}>
            <Link to={item} styleName='list__item'>{item}</Link>
          </ListItem>
        ))}
      </List>
      <Avatar
        alt={user.name}
        src={user.avatar_url}
        styleName='avatar'
      />
    </div>
  )
}

Header.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string
  })
}

export default Header
