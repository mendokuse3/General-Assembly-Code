const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx')

class Index extends React.Component{
  render() {
    return (
      <AppLayout title={`${this.props.page} Index Page`}>
      <ul>
      {this.props.fruits.map((fruit,i) => {
                  return <li>
                      <a href={`/${this.props.page}/${fruit.id}`}>{fruit.name}</a>
                      is { fruit.readyToEat? <span>It is ready to eat</span>: <span> It is not ready to eat </span>}
                      <form action={`/${this.props.page}/${fruit._id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE" className="btn"/>
                      </form>
                      <a href={`/${this.props.page}/${fruit._id}/edit`} className="btn">Edit This Fruit</a>
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
