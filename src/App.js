import React from 'react';
import './App.css';

import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './src/util';

/*const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];
*/
class App extends React.Component {
  constructor(this.state = {
    businesses: []
  };
this.searchYelp.bind(this));
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      setState = {
        businesses: businesses
      }
    })
  }

  render() {
    return (
      <div className="App">
    <h1>Ravenous</h1>
    <SearchBar searchYelp={this.searchYelp} />
    <BusinessList businesses={businesses} />
  </div>
    );
  }
}

export default App;
