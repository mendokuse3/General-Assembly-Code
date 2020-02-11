const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx');

class New  extends React.Component{
  render() {
    return (
    <AppLayout title="New Fruits Page">
      <form action="/fruits" method="POST">
          Name: <input type="text" name="name" /><br/>
          Color: <input type="text" name="color" /><br/>
          Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
          <input type="submit" value="Create Fruit"/>
      </form>
      </AppLayout>
    )
  }
}
module.exports= New;
