const React = require('react');
const Layout = require('./Layout');

class New extends React.Component {
    render() {
        return(
            <Layout title={this.props.name}>
                <h1>Create a new pokemon!</h1>
                <form action="/pokemon" method="POST">
                    <input type="text" name="name" placeholder="name"/>
                    <input type="text" name="img" placeholder="img"/>
                    <input type="submit" value="Create a new pokemon"/>
                </form>
            </Layout>
        )
    }
}

module.exports = New;