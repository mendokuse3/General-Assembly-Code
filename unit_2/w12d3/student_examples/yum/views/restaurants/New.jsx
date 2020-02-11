const React = require('react');
const AppLayout= require('../layouts/AppLayout.jsx')

class New extends React.Component{
  render() {
    return (
      <AppLayout title="Yum New Page">
      <form action={`/restaurants`} method="post">
        <p>
          <label>Name:</label>
          <input type="text"  name="name"/>
        </p>
        <p>
          <label>Owner:</label>
          <input type="text" name="owner"/>
        </p>
        <p>
          <label>Type:</label>
          <input type="text"  name="type"/>
        </p>
        <p>
          <label>Capacity:</label>
          <input type="number" name="capacity"/>
        </p>
        <p>
          <input type="submit" value="Submit"/>
        </p>
      </form>
      </AppLayout>
    )
  }
}
module.exports= New ;
