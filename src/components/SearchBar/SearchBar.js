import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    term: '',
    location: '',
    sortBy: 'best_match'

  }
  this.handleTermChange = this.handleTermChange.bind(this);
  this.handleLocationChange = this.handleLocationChange.bind(this);

 this.sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}


};


  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active'
    } else {
      return ''
    }
  }
  handleSortByChange(sortByOption){
      this.setState({ sortBy: sortByOption });
      this.handleSearch.bind(this);
    }
 handleTermChange(event) {
   this.setState({term: event.target.value});
   this.handleSearch.bind(this);
 }
 handleLocationChange(event) {
   this.setState({location: event.target.value});
   this.handleSearch.bind(this);
 }
 handleSearch(event) {

 }

 renderSortByOptions() {
   return Object.keys(this.sortByOptions).map(sortByOption => {
     let sortByOptionValue = this.sortByOptions[sortByOption];
     return (<li className={this.getSortByClass(sortByOptionValue)}
                 key={sortByOptionValue}
                 onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
               {sortByOption}
            </li>);
   });
 }
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeHolder="Search Locations" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <a>Lets Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
