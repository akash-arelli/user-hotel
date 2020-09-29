import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Orderstock.css";

class Orderstock extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.placeOrder = this.placeOrder.bind(this);

    this.state = {
      items: [],
      itemname: "",
      quantity: 0,
      price: 0,
    };
  }

  handleSubmit(e) {
    const thisrefer = this;
    e.preventDefault();

    let newItem = {
      itemname: thisrefer.state.itemname,
      quantity: thisrefer.state.quantity,
      price: thisrefer.state.price,
      total: thisrefer.state.price * thisrefer.state.quantity,
    };

    this.state.items.push(newItem);

    this.setState({
      items: this.state.items,
      itemname: "",
      quantity: "",
      price: "",
    });

    console.log(thisrefer.state.items);
  } 


handleDelete(index){
  this.state.items.splice(index,1) ;
  this.setState({
  items : this.state.items
})
}

placeOrder(){
  let auth = localStorage.getItem('auth')
  if(auth){
    alert('order placed')
  }else{
    alert('not authenticated')
  }

}




  render() {
    const { items } = this.state;

    return (
      <div className="main-container">
        <h2 className="main-heading"> Order Stock</h2>

        <div className="table-div">
          <table>
            <tr>
              <th>No.</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th> ₹ Price</th>
              <th> ₹ Total</th>
            </tr>

            {items.map((el,index) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{el.itemname}</td>
                  <td>{el.quantity}</td>
                  <td>{el.price}</td>
                  <td>{el.total}</td>
                  <td style={{color: 'red', cursor : 'pointer'}} onClick={()=>this.handleDelete(index)}>Delete</td>
                </tr>
              );
            })}
          </table>
        </div>

        <div className="table-div input-div">
          <form onSubmit={this.handleSubmit} className="form">
            <label>Item name</label>
            <input
              placeholder="item name"
              required
              className="input-box"
              onChange={(e) => {
                this.setState({
                  itemname: e.target.value,
                });
              }}
              value={this.state.itemname}
            />
            
            <label>Quantity</label>
            <input
              placeholder="quantity"
              required
              className="input-box"
              onChange={(e) => {
                this.setState({
                  quantity: e.target.value,
                });
              }}
              value={this.state.quantity}
            />
             <label>Price</label>
            <input
              placeholder="price"
              required
              className="input-box"
              onChange={(e) => {
                this.setState({
                  price: e.target.value,
                });
              }}
              value={this.state.price}
            />

            <button type="submit" className="imput-box cta">
              Add to order
            </button>
          </form>



        </div>
        
        <button onClick={this.placeOrder} className="imput-box cta">
             Place Order
            </button>

<Link to="/dashboard">
            <button className="imput-box cta">
              Go Back
            </button>
            </Link>
      </div>
    );
  }
}

export default Orderstock;
