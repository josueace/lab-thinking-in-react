import React from "react";
import 'jquery'
import 'popper.js'
import 'bootstrap';


const SearchBar =(props)=>{
    return (
        <div>
               <p class="iron">Search</p>
                <form class="example" action="action_page.php">
      <input type="text" placeholder="find food" name="search" onChange={(event) => props.handleChange(event)}/>
      <input type="checkbox" name="hasStock" onChange={() => props.toggle()}  />
      <label>Only show products on stock</label>
    </form>
           </div>

    );
}

export default SearchBar;