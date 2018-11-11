import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import './Repos.scss'

function Repos ({ repos }) {
  return (
    <Fragment>
      <h1 styleName='title'>Repos</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell numeric>Description</TableCell>
            <TableCell numeric>Created date</TableCell>
            <TableCell numeric>Forks</TableCell>
            <TableCell numeric>Open issues</TableCell>
            <TableCell numeric>Language</TableCell>
            <TableCell numeric>Size</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {repos.map(repo => {
            return (
              <TableRow key={repo.id}>
                <TableCell component='th' scope='row'>
                  {repo.name}
                </TableCell>
                <TableCell numeric>{repo.description}</TableCell>
                <TableCell numeric>{new Date(repo.created_at).toDateString()}</TableCell>
                <TableCell numeric>{repo.forks_count}</TableCell>
                <TableCell numeric>{repo.open_issues_count}</TableCell>
                <TableCell numeric>{repo.language}</TableCell>
                <TableCell numeric>{repo.size}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Fragment>
  )
}

Repos.propTypes = {
  repos: PropTypes.array
}

export default Repos
