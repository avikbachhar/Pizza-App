import React, { Component } from 'react';
import veg from '../assets/veg.jpg'
import nonveg from '../assets/nonveg.jpg'
import '../css files/order.css'
import orderStore from '../store/orderStore';
import * as orderActions from '../actions/orderActions'

class OrderPizza extends Component {
    constructor(){
        super()
        this.state={
            items : orderStore.getPizzas()
              
        }
    }
    componentDidMount() {
        orderStore.on("change", this.getData)
    }
    getData = () => {
        console.log("Getting Emp")
        this.setState({
            items: orderStore.getPizzas()
        });
    }
    onClickReduce(e){
        
        orderActions.reduceQuantity(e)
    }
    
    onClickIncrease(e){
        orderActions.addQuantity(e)
    }

    getimg(e) {
        if (e === 'veg') {
            return veg;
        }
        else {
            return nonveg;
        }
    }
    getBtn(data){

        if(data.qty>0){
            return  <div><button onClick={()=>this.onClickReduce(data.id)} className="btn cbtn btn-warning " type='button'><b><i class="fa-solid fa-minus"></i></b></button><li className='a'><b>   {data.qty}</b> </li> <button onClick={()=>this.onClickIncrease(data.id)} className="btn cbtn btn-warning " type='button'><b><i class="fa-solid fa-plus"></i></b></button></div>
        }
        else{
            
                return <div><button type="button" onClick={()=>this.onClickIncrease(data.id)} className="btn btn-warning "><div id= "sidelinks"> <ul><li id={data.id} value="0" name="plus" className="cart-text-size">Add To Cart</li></ul></div></button></div>
        }
    }
    render() {
        console.log("Rendering")
        return (
            <div>
                <div className="text-size" >
                    <div className="row">
                        {/*LOOP HERE */}
                        {this.state.items.map((data, id) =>
                        
                            {return(<div className="col-sm-6 mt-2 " key={id}>
                            <div className="card rounded-0 shadow p-3 1 bg-body" style={{height: "18rem"}}>
                                <div className="card-body row ">
                                    <div className="col-3 text-center">
                                        <div className="h4">{data.name}</div>
                                        <div> <img src={this.getimg(data.type)} height="15px" width="15px" alt="load" /></div>
                                        <div><br /><br />
                                            <p> <b>₹ {data.price}.00</b></p>
                                        </div>
                                    </div>
                                    <div className="col-6 ">
                                        <div>{data.description}</div>
                                        <br />
                                        <div><b>Ingredient :</b>{data.ingredients.join(', ')}
                                        </div>

                                        <br />
                                        <div><b>Toppings :</b>
                                        {data.topping.join(', ')}
                                        </div>
                                    </div>
                                    <div className="col-3  text-center">

                                        <div>
                                            <img
                                                src={data.image} height="100%" width="100%" alt="Loading" />
                                        </div>
                                        {this.getBtn(data)}
                                        <br /><br /><br />
                                    </div>
                                </div>
                            </div>
                        </div>)}

                        )}
                        
                        {/*LOOP END HERE */}

                    </div>
                </div>
            </div>
        );
    }
}

export default OrderPizza;