const React = require('react');
const Layout = require('./Layout');

class Show extends React.Component {
    render() {
        return(
            <Layout title={this.props.pokemon.name}>
                <h1>This page is about: {this.props.pokemon.name}</h1>
                <img src={this.props.pokemon.img} />
             
            </Layout>
        )
    }
}

module.exports = Show;