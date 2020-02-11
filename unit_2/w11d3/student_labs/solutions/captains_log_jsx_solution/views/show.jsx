const React = require('react');
const Layout = require('./layout.jsx');

class Show extends React.Component {
    render() {
        return(
                <Layout>
                    <h1>Logs show page</h1>
                        <nav>
                            <a href="/">Back to home</a>
                        </nav>
                        <div class="row">
                            <h2>The {this.props.log.title}</h2>
                             <h3>{this.props.log.entry}</h3>
                             <h4>{this.props.log.shipIsBroken}</h4>
                            <h4>{this.props.log.createdAt.toString()}</h4>
                        </div>
                </Layout>
        )
    }
}

module.exports = Show;