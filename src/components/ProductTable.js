

import React from "react";
import ProductRow from './ProductRow';



const ProductTable =(props)=>{
    return (
        <div class="container">

<div class="row header-row">
    <span class="col-lg-8">Name</span>
    <span class="col-lg-4">Price</span>
    </div>

{
    props.data.map(stock =><ProductRow {...stock}/>)
}






</div>

    );
}

export default ProductTable;