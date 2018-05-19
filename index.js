import React from 'react'
import PropTypes from 'prop-types'

const connectionTypes = ['slow-2g', '2g', '3g', '4g']

export default class NetLoad extends React.PureComponent {
  static propTypes = {
    defaultType: PropTypes.string,
    connection: PropTypes.string
  }
  static defaultProps = {
    defaultType: '3g'
  }

  getConnectionType () {
    const { defaultType } = this.props
    const connectionType = (navigator && navigator.connection && navigator.connection.effectiveType) 
      ? navigator.connection.effectiveType
      : defaultType

    return connectionType
  }

  shouldRender () {
    const connectionType = this.getConnectionType()
    let { connection } = this.props

    if (connection.endsWith('+')) {
      connection = connection.slice(0, -1)
      return connectionTypes.indexOf(connectionType) > connectionTypes.indexOf(connection)

    } else if (connection.endsWith('-')) {
      connection = connection.slice(0, -1)
      return connectionTypes.indexOf(connectionType) < connectionTypes.indexOf(connection)

    } else {
      return connectionType === connection
    }
  }

  render () {
    console.log(this.props)
    const {children} = this.props
    const shouldRender = this.shouldRender()

    return shouldRender ? children : null
  }
}