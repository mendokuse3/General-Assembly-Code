const React = require('react');
const Layout = require('./Layout')

class New extends React.Component {
  render() {
    return (
        <Layout>
            <h1>New Fruit page</h1>
            <form action="/fruits" method="POST">
                Name: <input type="text" name="name" /><br/>
                Color: <input type="text" name="color" /><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                <input type="submit" name="" value="Create Fruit"/>
             </form>
        </Layout>);
  }
}

module.exports = New;
