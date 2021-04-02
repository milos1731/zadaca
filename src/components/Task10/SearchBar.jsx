import React, {Component} from "react";
import "./SearchBar.css"


class SearchBar extends Component {
    render() { 
        return ( 
        <div>
            <input
            value={this.props.value}
            onChange={this.props.change}
            placeholder="Search all tracks"
            className="search-bar"
            type="text"
            />
            <span className="mglass"></span>
        </div>
             );
    }
}
 
export default SearchBar;

