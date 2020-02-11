const React = require('react');
import Layout from './Layout';
import { threadId } from 'worker_threads';

class Index extends React.Component {
    render() {
        return ( 
            <Layout title={this.props.title}>
                <h1>Welcome to my pokedex</h1>
                <ul className="my-ul-styles">
                    {this.props.pokemon.map((el, index) => {
                          return (
                                <li>
                                    <a href={`/pokemon/${index}`}>
                                        <h2>{el.name}</h2>
                                        <img src={el.img} />
                                    </a>
                                    <a href={`/pokemon/${index}/edit`} className="btn">Edit me!</a>
                                    <form action={`/pokemon/${index}?_method=DELETE`} method="POST">
                                        <input className="btn" type="submit" value="delete"/>
                                    </form>
                                </li>
                            )})}
                   
                </ul>
            </Layout>
        )
    }
}

module.exports = Index;
