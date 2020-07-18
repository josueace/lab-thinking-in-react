import React,{Component} from "react";
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import data from '../data.json';






class FilterableProductTable extends Component{
    constructor(){
        super();
        this.state={
            data:data.data,
            search:'',
            hasStock:true
        }
    }

    toggleStock=()=>{
        this.setState({ hasStock: !this.state.hasStock });
      
    }
    

    filteredStock;

    

    


      handleChange=(event)=> {
        let { name, value } = event.target;
        if(name === "hasStock" && value === "on"){
            value = true;
        } 
        this.setState({[name]: value});
        
      }

     


    render(){

        this.filteredStock = this.state.data.filter(stock => (stock.name.includes(this.state.search) == true&& stock.stocked ==this.state.hasStock))

        return(
           
        <div className="list">   
        <h1>IronStore</h1>
            <SearchBar handleChange={this.handleChange} toggle={this.toggleStock} />
<ProductTable data={this.filteredStock}/>
      
      
      </div>
        )
    }
}

export default FilterableProductTable;

