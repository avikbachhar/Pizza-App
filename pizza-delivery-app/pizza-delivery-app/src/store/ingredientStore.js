import {  EventEmitter} from "events";
import Dispatcher from '../dispatcher/appDispatcher';
class IngredientStore extends EventEmitter {
    
    constructor() {
         super();
         this.count=0;
         this.ingredients = [{
            "id": 101,
            "tname": "Pepperoni",
            "price": 110,
            selected : false,
            "image": "https://thumb1.shutterstock.com/display_pic_with_logo/55755/161642033/stock-photo-single-slice-of-pepperoni-meat-isolated-on-white-with-path-shot-from-above-161642033.jpg"
          },
            {
              "id": 102,
              "tname": "Mushroom",
              "price": 35,
              
            selected : false,
              "image": "https://thumb9.shutterstock.com/display_pic_with_logo/1207547/568114672/stock-photo-fresh-cultivated-button-mushrooms-and-twigs-of-parsley-in-the-wooden-basket-one-whole-mushroom-and-568114672.jpg"
            },
            {
              "id": 103,
              "tname": "Black beans",
              "price": 45,
              
            selected : false,
              "image": "https://thumb1.shutterstock.com/display_pic_with_logo/180783430/755093356/stock-photo-black-beans-grain-on-white-background-755093356.jpg"
            },
            {
              "id": 104,
              "tname": "Black olive",
              "price": 50,
              
            selected : false,
              "image": "https://thumb7.shutterstock.com/display_pic_with_logo/137002/244097551/stock-photo-black-cut-olive-rings-isolated-on-white-244097551.jpg"
            },
            {
              "id": 105,
              "tname": "Green olive",
              "price": 50,
              
            selected : false,
              "image": "https://thumb7.shutterstock.com/display_pic_with_logo/4526794/639321544/stock-photo-stuffed-olives-isolated-on-white-background-639321544.jpg"
            },
            {
              "id": 106,
              "tname": "Jalapeno",
              "price": 45,
              
            selected : false,
              "image": "https://thumb7.shutterstock.com/display_pic_with_logo/999701/250939984/stock-photo-sliced-green-jalapeno-peppers-on-white-background-250939984.jpg"
            },
            {
              "id": 107,
              "tname": "Chicken",
              "price": 60,
              
            selected : false,
              "image": "https://thumb7.shutterstock.com/display_pic_with_logo/371512/583587001/stock-photo-fresh-raw-chicken-isolated-on-white-583587001.jpg"
            },
            {
              "id": 108,
              "tname": "Tomato",
              "price": 20,
              
            selected : false,
              "image": "https://thumb1.shutterstock.com/display_pic_with_logo/721492/400195690/stock-photo-tomatoes-isolated-on-white-background-400195690.jpg"
            },
            {
              "id": 119,
              "tname": "Red peprika",
              "price": 30,
              
            selected : false,

              "image": "https://thumb9.shutterstock.com/display_pic_with_logo/676765/343609895/stock-photo-chili-pepper-isolated-on-a-white-background-343609895.jpg"
            },
            {
              "id": 110,
              "tname": "Paneer",
              "price": 45,
              
            selected : false,
              "image": "https://thumb7.shutterstock.com/display_pic_with_logo/605002/195341264/stock-photo-piece-of-cheese-or-paneer-isolated-on-a-white-background-195341264.jpg"
            },
            {
              "id": 111,
              "tname": "Fried Onion",
              "price": 18,
              
            selected : false,
              "image": "https://thumb1.shutterstock.com/display_pic_with_logo/152950/630261116/stock-photo-delicious-crispy-fried-onion-rings-isolated-on-white-630261116.jpg"
            },
            {
              "id": 112,
              "tname": "Capsicum",
              "price": 15,
              
            selected : false,
              "image": "https://thumb7.shutterstock.com/display_pic_with_logo/259963/259963,1235208469,1/stock-photo-vegetables-bulgarian-pepper-on-a-white-background-isolated-25335661.jpg"
            },
            {
              "id": 114,
              "tname": "Sweet corn",
              "price": 38,
              
            selected : false,
              "image": "https://thumb7.shutterstock.com/display_pic_with_logo/3102608/706329457/stock-photo-sweet-corn-in-wooden-bowl-and-spoon-isolated-on-white-background-706329457.jpg"
            }
          ]
    }
    getIngredents() {
        
        return this.ingredients;
    }
    getTotal(){
      var total = 0;
      this.ingredients.map((data,id)=>
      data.selected ? total = total + data.price : total = total + 0
      )
      return total
    }
    onSelection(item_id){
      
      var newArray = [];
      this.ingredients.map((data,id)=>
      Number(data.id) === Number(item_id) ?
      newArray.push({
        id: data.id,
        tname: data.tname,
        price: data.price,
        selected : true,
        image : data.image
        
    }) : newArray.push({
      id: data.id,
      tname: data.tname,
      price: data.price,
      selected : data.selected,
      image : data.image})
      )
      
      this.ingredients = newArray;
      this.emit("change");
    }
    removeSelection(item_id){
      
      var newArray = [];
      this.ingredients.map((data,id)=>
      Number(data.id) === Number(item_id) ?
      newArray.push({
        id: data.id,
        tname: data.tname,
        price: data.price,
        selected : false,
        image : data.image
        
    }) : newArray.push({
      id: data.id,
      tname: data.tname,
      price: data.price,
      selected : data.selected,
      image : data.image})
      )
      
      this.ingredients = newArray;
      this.emit("change");
    }
    onDeSelection(item_id){
      
      
      var newArray = [];
      this.ingredients.map((data,id)=>
      Number(data.id) === Number(item_id) ?
      newArray.push({
        id: data.id,
        tname: data.tname,
        price: data.price,
        selected : false,
        image : data.image
        
    }) : newArray.push({
      id: data.id,
      tname: data.tname,
      price: data.price,
      selected : data.selected,
      image : data.image})
      )
      
      this.ingredients = newArray;
      this.emit("change");
    }
    onHandleActions(action) {
        
        switch (action.type) {
            
            case "SELECT": {
                
                this.onSelection(action.id)
                break;
                
            }
            case "DESELECT": {
                
              this.onDeSelection(action.id)
                break;
            }
            case "REMOVESELECT": {
                
                  this.removeSelection(action.id)
                    break;
                
            }
             default:
        }
    }
}
const ingredientStore = new IngredientStore();
Dispatcher.register(ingredientStore.onHandleActions.bind(ingredientStore));
export default ingredientStore;
 //to update the store with the new changes 
 //register dispatcher with store and bind with the action method to get the updated lsit of authors on UI