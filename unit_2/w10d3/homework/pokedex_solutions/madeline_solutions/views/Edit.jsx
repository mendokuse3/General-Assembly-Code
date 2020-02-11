const React = require('react');
const Layout = require('./Layout');

class Edit extends React.Component {
    render() {
        return(
            <Layout title={this.props.name}>
                <h1>Edit a pokemon!</h1>

                <form action={`/pokemon/${this.props.index}?_method=PUT`} method="POST">
                    <input type="text" name="name" placeholder="name"/>
                    <input type="text" name="img" placeholder="img"/>
                    <input type="submit" value="Update"/>
                </form>
            </Layout>
        )
    }
}

module.exports = Edit;