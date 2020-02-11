const React = require('react');
const AppLayout= require('../layouts/AppLayout.jsx')

class Edit extends React.Component{
  render() {
    return (
      <AppLayout title="Yum Edit Page">
      <form action={`/restaurants/${this.props.restaurant._id}`}?_method=put" method="post">
        <p>
          <label>Name:</label>
          <input type="text" value={this.props.restaurant.name} name="name"/>
        </p>
        <p>
          <label>Owner:</label>
          <input type="text" value={this.props.restaurant.owner} name="owner"/>
        </p>
        <p>
          <label>Type:</label>
          <input type="text" value={this.props.restaurant.type} name="type"/>
        </p>
        <p>
          <label>Capacity:</label>
          <input type="number" value={this.props.restaurant.capacity} name="capacity"/>
        </p>
        <p>
          <input type="submit" value="Submit"/>
        </p>
      </form>
      </AppLayout>
    )
  }
}
module.exports= Edit ;
