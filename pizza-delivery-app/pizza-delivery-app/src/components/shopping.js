import React, { Component } from 'react';
import orderStore from '../store/orderStore';
import ingredientStore from '../store/ingredientStore';
import shoppingStore from '../store/shoppingStore';
import * as orderActions from '../actions/orderActions'

import * as ingredentActions from '../actions/ingredentActions'
import veg from '../assets/veg.jpg'
import nonveg from '../assets/nonveg.jpg'
class Shopping extends Component {
    constructor() {
        super();

        this.state = {
            price: 0,
            ingredient: ingredientStore.getIngredents(),
            total : shoppingStore.getTotal(),
            pizzas : orderStore.getPizzas(),
            govtTax : shoppingStore.getGovtTax(),
            deliveryCharge : shoppingStore.getDeliveryCharge(),
            payable : shoppingStore.getPayable()
        }
    }
    
    componentDidMount() {
        ingredientStore.on("change", this.getData)
        
        orderStore.on("change", this.getData)
    }
    getData = () => {
        console.log("Getting Emp")
        this.setState({
            ingredient: ingredientStore.getIngredents(),
            pizzas : orderStore.getPizzas(),
            total : shoppingStore.getTotal(),
            govtTax : shoppingStore.getGovtTax(),
            deliveryCharge : shoppingStore.getDeliveryCharge(),
            payable : shoppingStore.getPayable()
        });
    }
    
    getTotal(a,b){
        return Number(a)+Number(b);
    }

    getimg(e) {
        if (e === 'veg') {
            return veg;
        }
        else {
            return nonveg;
        }
    }
    onClickReduce(e){
        
        orderActions.reduceQuantity(e)
    }
    
    onClickIncrease(e){
        orderActions.addQuantity(e)
    }

    onRemovePizza(e){
        orderActions.removeQuantity(e)
    }
    
    onRemoveIngredients(e){
        ingredentActions.removeSelection(e)
    }
    
    getPizzas(data){
        if(data.qty>0){
            return <div className="row m-2 border border-dark">
            <div className="col"><img
                src={data.image}
                height="70px" style={{ marginTop: "10px" }} alt='loading' /></div>

            <div className="col-1"><img src={this.getimg(data.type)} height="17px" style={{ marginTop: "65%" }} alt='loading' /></div>

            <div className="col"><b>
                <p style={{ marginTop: "20%" }}>{data.name}</p>
            </b></div>

          

            <div className="col"><b>
                <p style={{ marginTop: "20%" }}>Price : {data.price}</p>
            </b></div>
            <div className="col">
                <div style={{ marginTop: "15%" }}>
                    <button type="button" onClick={()=>this.onClickReduce(data.id)} className="btn btn-warning">-</button>
                    &nbsp;<b>{data.qty}</b>&nbsp;
                    <button type="button" onClick={()=>this.onClickIncrease(data.id)} className="btn btn-warning">+</button>
                </div>
            </div>
            <div className="col"><b>
                <p style={{ marginTop: "20%" }}>{data.total}</p>
            </b></div>

            <div className="col"><b>
                <p style={{ marginTop: "20%" }}><i onClick={()=>this.onRemovePizza(data.id)} className="fa-solid fa-trash"></i></p>
            </b></div>
        </div>
        }
        
    }
    getIngredents(data){
        if(data.selected){
            return <div className="row m-2 border border-dark">
            <div className="col"><img src={data.image}
                height="70px" style={{ marginTop: "10px" }} alt='loading' /></div>


            <div className="col"><b>
                <p style={{ marginTop: "20%" }}>{data.tname}</p>
            </b></div>



            <div className="col"><b>
                <p style={{ marginTop: "20%" }}>{data.price}</p>
            </b></div>

            <div className="col"><b>
                <p style={{ marginTop: "20%" }}><i onClick={()=>this.onRemoveIngredients(data.id)} className="fa-solid fa-trash"></i></p>
            </b></div>
        </div>
        }
    }

    render() {
        return (
            <div>
                <div className="container mt-3">
                    <div className="row border border-dark">
                        <div className="col-8 m-2 border border-dark">
                            <div className="row m-2 border border-dark">
                                <div className="h1 text-center">ORDER SUMMARY</div>
                            </div>


                            {this.state.pizzas.map((data,id)=>
                            this.getPizzas(data)
                            )}
                            {this.state.ingredient.map((data,id)=>
                            this.getIngredents(data)
                            )}    
                            

                        </div>
                        <div className="col  m-2 border border-dark">
                            <div className="mt-5"></div>
                            <div className="row border border-dark m-1">
                                <div className="col-8"><b>Total</b></div>
                                <div className="col"><b>{this.state.total}</b></div>
                            </div>

                            <div className="row border border-dark m-1">
                                <div className="col-8"><b>Govt Tax</b></div>
                                <div className="col"><b>{this.state.govtTax}</b></div>
                            </div>

                            <div className="row border border-dark m-1">
                                <div className="col-8"><b>Delivery Charge</b></div>
                                <div className="col"><b>{this.state.deliveryCharge}</b></div>
                            </div>

                            <div className="row border border-dark m-1">
                                <div className="col-8"><b>Payable</b></div>
                                <div className="col"><b>{this.state.payable}</b></div>
                            </div>

                            <div className="row m-3">

                                <button type="button" className="btn btn-dark">Pay {this.state.payable}</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Shopping;