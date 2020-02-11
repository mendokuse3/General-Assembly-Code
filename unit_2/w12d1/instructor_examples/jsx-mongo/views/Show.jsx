const React = require('react');
const Layout = require('./Layout')

class Show extends React.Component {
    render(){
        return (
            <Layout>
                <h1>Fruits show page</h1>
                The { this.props.fruit.name } is { this.props.fruit.color }
        { this.props.fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat` }
            </Layout>
        )
    }
}
module.exports = Show;
