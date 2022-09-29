const React = require('react')
const Layout = require('../layout/layout')

class Index extends React.Component {
  render() {
    const { logs } = this.props

    return (
      <Layout title="all logs" group="logs">
        <div className="wrapper">
          <h1>All Logs</h1>
          <div className="items">
            {logs.map(log => {
              return (
                <ul>
                  <li>{log.title}</li>
                </ul>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

module.exports = Index
