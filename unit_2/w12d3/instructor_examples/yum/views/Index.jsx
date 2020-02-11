const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx')

class Index extends React.Component{
  render() {
    return (
      <AppLayout title="Yum Homepage">
      <h2>Restaurants</h2>
        <ul class="restaurant-list">
        {this.props.restaurants.map(
          (restaurant, index) => {
            return(
              <li class="restaurant-list__item"><a href={`/restaurants/${restaurant.id}`}>{restaurant.name}</a></li>
            )}
        )}
        </ul>
      <p>
        <a href="/restaurants">See All Restaurants</a> |
        <a href="/restaurants/new">New Restaurant</a>
      </p>
      </AppLayout>

    )
  }
}
module.exports= Index ;
