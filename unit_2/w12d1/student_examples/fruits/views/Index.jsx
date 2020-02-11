const React = require('react');

class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>Fruits index page</h1>
                <nav>
                    <a href="/fruits/new">Create a New Fruit</a>
                </nav>
                {this.props.fruits.map((fruit,i) => {
                    return <p>
                        <a href={`/fruits/${fruit.id}`}>{fruit.name}</a>
                    </p>
                })}
            </div>
        )
    }
}

module.exports = Index;