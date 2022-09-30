const React = require('react')
const Layout = require('../layout/layout')

class Show extends React.Component {
  render() {
    const { title, entry, broken, _id, createdAt, updatedAt } = this.props.log
    return (
      <Layout title={title} group="logs">
        <div className="show">
          <div className="header">
            <h1>Show Single Log</h1>
            <a href="/logs">back</a>
          </div>

          <ul className="item">
            <li>
              <span className="bold">Title: </span> {title}
            </li>
            <li>
              <span className="bold">Entry: </span> {entry}
            </li>
            <li>
              <span className="bold">Broken: </span>
              {broken ? 'Yes' : 'No'}
            </li>
            <li>
              <span className="bold">Created: </span> {String(createdAt)}
            </li>
            <li>
              <span className="bold">Updated: </span> {String(updatedAt)}
            </li>
            <form action={`/logs/${_id}?_method=DELETE`} method="POST">
              <a href={`/logs/${_id}/edit`} className="edit">
                edit
              </a>
              <button type="submit" className="delete">
                delete
              </button>
            </form>
          </ul>
        </div>
      </Layout>
    )
  }
}

module.exports = Show
