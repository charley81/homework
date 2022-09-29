const React = require('react')

class Layout extends React.Component {
  render() {
    return (
      <>
        <head>
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
