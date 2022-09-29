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
              const { title, entry, broken } = log

              return (
                <ul>
                  <li>{title}</li>
                  <li>{entry}</li>
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
