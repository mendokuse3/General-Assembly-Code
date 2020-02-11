const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx');

class Show  extends React.Component{
  render() {
    return (
        <AppLayout title="Fruits Show Page">
              The {this.props.fruit.name} is {this.props.fruit.color}.
              { this.props.fruit.readyToEat? <span>It is ready to Eat</span>:
                <span>It is not ready to Eat</span>
              }
              <nav>
                  <a href="/fruits">Back to Fruits Index</a>
              </nav>
        </AppLayout>
    )
  }
}
module.exports= Show ;
