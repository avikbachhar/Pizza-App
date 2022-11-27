import React, { Component } from 'react';
import '../css files/build.css'
import ingredientStore from '../store/ingredientStore';
import * as ingredentActions from '../actions/ingredentActions'
class BuildPizza extends Component {
    constructor() {
        super();

        this.state = {
            price: 0,
            items: ingredientStore.getIngredents(),
            total : ingredientStore.getTotal()
        }
    }
    
    componentDidMount() {
        ingredientStore.on("change", this.getData)
    }
    getData = () => {
        console.log("Getting Emp")
        this.setState({
            items: ingredientStore.getIngredents(),
            total : ingredientStore.getTotal()
        });
    }
    onSelection(e){
        ingredentActions.select(e)
    }
    onDeselection(e){
        ingredentActions.deselect(e)
    }
    onAddition = (e) => {
        var checkedBoxes = document.getElementsByName('plus');
        var totalCost = 0;

        for (var checkbox of checkedBoxes) {
            if (checkbox.checked) {
                this.onSelection(checkbox.id)
                totalCost = totalCost + parseInt(checkbox.value);
            }
            else{
                
                this.onDeselection(checkbox.id)
            }
        }
        this.setState({
            price: totalCost
        })

    }

    getAddCart(data){
        if(data.selected){
            return  true;
        }
        else{
            return  false;
        }
    }

    render() {
        return (
     
            <div>
                <div className="text-center">
                    <p>Pizzeria now gives you options to build your own pizza. Customize your pizza by choosing items from the list given below</p>
                </div>
                <table className="table table-striped table-style">


                    <tbody>
                        {this.state.items.map((data, id) => {
                            return (
                                <tr key={id}>
                                    <td><img src={data.image} height="35px" width="60px" alt="pizza"></img></td>
                                    <td><b>{data.tname}&nbsp;&nbsp;&nbsp;&nbsp;₹{data.price}.00</b></td>
                                    <td ><input type="checkbox" value={data.price} id={data.id} checked={this.getAddCart(data)} name="plus" onClick={()=>{this.onAddition()}} /> &nbsp;&nbsp;&nbsp;<span className="copyright">Add</span></td>
                                </tr>
                            )
                        }
                        )}

                        <tr>
                            <td colSpan='3'>
                                <b>
                                    
                                    <span className="cost-text" id="cost">
                                        Total : {this.state.total}
                                    </span>
                                </b> <br />
                                <div className="text-center">
                                    <button className=" btn btn-dark build-your-pizza-btn" >Build Your Pizza</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="copyright text-center">
                    <p>Copyrights @ 2022 Pizzeria. All rights reserved</p>
                </div>
            </div>   );
    }
}

export default BuildPizza;

