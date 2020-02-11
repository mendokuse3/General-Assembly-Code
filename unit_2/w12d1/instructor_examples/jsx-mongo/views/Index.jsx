const React = require('react');
const Layout = require('./Layout')

class Index extends React.Component {
  render() {
    return (
        <Layout>
          <nav>
            <a href="/fruits/new">Create a New Fruit</a>
          </nav>
              <h1>Fruits index page</h1>
              <ul>
                  {
                    this.props.fruits.map((fruit, i) => {
                      return (
                          <li>
                          The <a href={`/fruits/${ fruit.id }`}> { fruit.name } </a>  is { fruit.color }
                          { fruit.readyToEat ? ` It is ready to eat` : ` It is not ready to eat` }
                          <form action={`/fruits/${fruit.id}?_method=DELETE`} method="POST">
                            <input type="submit" value="delete"/>
                          </form>
                          <a href={`/fruits/${fruit.id}/edit`}>Edit</a>
                          </li>
                          )
                      })
                  }
              </ul>
        </Layout> 
      );
  }
}

module.exports = Index;
