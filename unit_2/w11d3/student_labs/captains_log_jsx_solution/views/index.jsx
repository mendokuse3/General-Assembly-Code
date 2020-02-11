const React = require('react');
const Layout = require('./layout.jsx.js.js');

class Index extends React.Component {
    render() {
        return(
                <Layout>
                    <h1>Captains Log</h1>
                    <nav>
                        <a href="/logs/new">Create a new log</a>
                    </nav>
                    {this.props.logs.map((log, i) => {
                        return (
                            <li>
                                <a href={`/logs/${log.id}`}>The {log.title}</a>
                                <a href={`/logs/${log.id}/edit`}>Edit</a>
                                <form action={`/logs/${log.id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="Delete"/>
                                </form>
                                
                            </li>
                            )
                        })}
                </Layout>
        )
    }
}

module.exports = Index;