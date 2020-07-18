

import React from "react";




const ProductRow =(props)=>{
    return (
        <div class="container">

<div class="row td-row">
    <span class="col-lg-8">{props.name}</span>
    <span class="col-lg-4">{props.price}</span>
    </div>




</div>

    );
}

export default ProductRow;