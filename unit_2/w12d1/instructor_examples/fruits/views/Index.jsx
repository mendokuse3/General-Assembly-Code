const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx')

class Index extends React.Component{
  render() {
    return (
      <AppLayout title="Fruits Index Page">
      <ul>
      {this.props.fruits.map((fruit,i) => {
                  return <li>
                      <a href={`/fruits/${fruit.id}`}>{fruit.name}</a>
                      is { fruit.readyToEat? <span>It is ready to eat</span>: <span> It is not ready to eat </span>}
                      <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/>
                      </form>
                      <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>
                  </li>
              })}
      </ul>
      <nav>
          <a href="/fruits/new">Create a new Fruit</a>
      </nav>
      </AppLayout>
    )
  }
}
module.exports= Index;
