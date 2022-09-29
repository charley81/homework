const React = require('react')

class Layout extends React.Component {
  render() {
    const { title, group } = this.props

    return (
      <>
        <head>
          <title>{title}</title>
          <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body>
          <div>{this.props.children}</div>
        </body>
      </>
    )
  }
}

module.exports = Layout
