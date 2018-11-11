import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'

import './Events.scss'

class Events extends Component {
  static propTypes = {
    events: PropTypes.array
  }

  drawChart () {
    const events = this.getEvents()
    const svgWidth = 1200
    const svgHeight = 300
    const scale = 5
    const barPadding = 5
    const barWidth = (svgWidth / events.length)

    const svg = d3.select('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight)
      .attr('class', 'bar-chart')

    svg.selectAll('rect')
      .data(events)
      .enter()
      .append('rect')
      .attr('y', function (d) {
        return svgHeight - d.count * scale
      })
      .attr('height', function (d) {
        return d.count * scale
      })
      .attr('width', barWidth - barPadding)
      .attr('transform', function (d, i) {
        const translate = [barWidth * i, 0]
        return 'translate(' + translate + ')'
      })
      .attr('fill', '#ffadad')

    const text = svg.selectAll('text')
      .data(events)
      .enter()
      .append('text')

    text
      .attr('y', function (d) {
        return svgHeight - d.count * scale
      })
      .attr('height', function (d) {
        return d.count * scale
      })
      .text(function (d) {
        return d.type
      })
      .attr('width', barWidth - barPadding)
      .attr('font-family', 'sans-serif')
      .attr('font-size', '14px')
      .attr('fill', '#fff')
      .attr('transform', function (d, i) {
        const translate = [barWidth * i, -5]
        return 'translate(' + translate + ')'
      })
  }

  getUniqueEvents = () => {
    const uniqueEvents = {}
    this.props.events.forEach(event => {
      if (uniqueEvents[event.type]) {
        uniqueEvents[event.type]++
      } else {
        uniqueEvents[event.type] = 1
      }
    })

    return uniqueEvents
  }

  getEvents = () => {
    const uniqueEvents = this.getUniqueEvents()

    return Object.keys(uniqueEvents).map(event => {
      const parsedEvent = event.split('E')
      return {
        type: parsedEvent[0],
        count: uniqueEvents[event]
      }
    })
  }

  componentDidMount () {
    this.drawChart()
  }

  render () {
    return (
      <Fragment>
        <h1 styleName='title'>Events</h1>
        <svg />
      </Fragment>
    )
  }
}

export default Events
