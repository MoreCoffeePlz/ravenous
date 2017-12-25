const apiKey = '0jUnTEdbmZMexqY6lUl1VAAdCoq6FMtlFkx-S-QoOfiABNRNYZOPpmVxxOlUhKGTQgXN1j-iUC35FaSCOn0u62NwrzcaaNGNOiQweNqLDHPNOIeT2zPIsaWhxDlBWnYx'
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
     Authorization: `Bearer ${apiKey}` 
  }
}).then(response => {
  response.json();
}).then(jsonResponse => {
  if (jsonResponse.businesses) {
    return jsonResponse.businesses.map(business => (
      return {
        id: business.id,
        imageSRC: business.image_url,
        name: business.name,
        address: business.address,
        city: business.city,
        state: business.state,
        zipCode: business.zipCode
        category: business.category,
        rating: business.rating
        reviewCount: business.reviewCount
      }
    ));
  }
});
  }
}
export Yelp
