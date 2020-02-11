const React = require('react');
const Layout = require('./Layout')

class Edit extends React.Component {
  render() {
    return (
        <Layout>
            <nav>
            <a href="/fruits/new">Create a New Fruit</a>
            </nav>
            <h1>Edit Fruit page</h1>
            <form action={`/fruits/${this.props.fruit.id}?_method=PUT`} method="POST">
                {/* <!--  NOTE: the form is pre-populated with values for the server--> */}
                Name: <input type="text" name="name" value={this.props.fruit.name}/><br/>
                Color: <input type="text" name="color" value={this.props.fruit.color}/><br/>
                Is Ready To Eat:
                <input type="checkbox" name="readyToEat" checked={this.props.fruit.readyToEat}/>
                <br/>
                <input type="submit" name="" value="Submit Changes"/>
            </form>
        </Layout> 
    );
  }
}

module.exports = Edit;
