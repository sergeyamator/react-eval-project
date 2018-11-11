import './app.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {withRouter, Router, Route, Switch} from 'react-router-dom'
import history from '../../services/history'
import Header from 'components/Header'
import UserCard from 'components/UserCard'
import Repos from 'components/Repos'
import Events from 'components/Events'
import {getUser} from 'actions/userActions'
import {getRepos} from 'actions/reposActions'
import {getEvents} from 'actions/eventsActions'
import GlobalStyles from './globalStyles'

const mapStateToProps = state => ({
  user: state.user,
  repos: state.repos,
  events: state.events
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
    }),

    repos: PropTypes.array,

    events: PropTypes.array
  }

  componentDidMount () {
    const {getUser, getRepos, getEvents} = this.props
    getUser()
    getRepos()
    getEvents()
  }

  render () {
    const { user, repos, events } = this.props
    return (
      <div styleName='app'>
        <GlobalStyles />
        <Header user={user} />
        <Router history={history}>
          <Switch>
            <Route
              exact
              path='/'
              component={() => <UserCard user={user} />}
            />
            <Route
              exact
              path='/repos'
              component={() => <Repos repos={repos} />}
            />
            <Route
              exact
              path='/events'
              component={() => <Events events={events} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
