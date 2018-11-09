import './app.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'

import Header from 'components/Header'
import {getUser} from 'actions/userActions'
import {getRepos} from 'actions/reposActions'
import {getEvents} from 'actions/eventsActions'

const mapStateToProps = state => ({
  user: state.user,
  repos: state,
  events: state
})

const mapDispatchToProps = dispatch => (bindActionCreators({
  getEvents,
  getRepos,
  getUser
}, dispatch))

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
    getEvents: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,

    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      bio: PropTypes.string,
      blog: PropTypes.string,
      events_url: PropTypes.string,
      followers: PropTypes.number
    })
  }

  componentDidMount () {
    const {getUser, getRepos, getEvents} = this.props
    getUser()
    getRepos()
    getEvents()
  }

  render () {
    console.log(this.props);
    return (
      <div styleName='app'>
        <Header user={this.props.user} />
      </div>
    )
  }
}
