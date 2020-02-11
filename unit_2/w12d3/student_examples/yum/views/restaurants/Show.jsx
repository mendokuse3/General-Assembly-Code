const React = require('react');
const AppLayout= require('../layouts/AppLayout.jsx');

class Show extends React.Component{
  render() {
    return (
    <AppLayout title="Yum Show">
    <p>Owner: {this.props.owner}</p>
    <p>Type: {this.props.type}</p>
    <p>Capacity: {this.props.capacity}</p>

    <a href={`/restaurants/edit/${this.props._id}`}>Edit</a>

    <form action={`/restaurants/${this.props._id}?_method=delete`} method="post">
      <input type="submit" value="Delete" />
    </form>
    </AppLayout>
    )
  }
}
module.exports= Show;
