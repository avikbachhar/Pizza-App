import {  EventEmitter} from "events";
import Dispatcher from '../dispatcher/appDispatcher';
class OrderStore extends EventEmitter {
    
    constructor() {
         super();
         this.count=0;
         this.pizzas = [{
            "id": "0001",
            "type": "veg",
            "price": 290,
             qty : 0,
             total : 0,
            "name": "Paneer Tikka",
            "image": "https://thumb9.shutterstock.com/display_pic_with_logo/376831/127528958/stock-photo-delicious-italian-pizza-over-white-127528958.jpg",
            "description": "This is popular italian pizza flavoured with marinated tikka sauce and paneer",
            "ingredients": ["dough/flour", "pizza saucce", "pizza sauce seasoning", "cheese"],
            "topping": ["Paneer", "Fried Onion", "Green olive", "Capsicum", "Red peprika"]
          },
            {
              "id": "0002",
              "type": "nonveg",
              "price": 350,
              qty : 0,
              total : 0,
              "name": "Chicken Italiaona",
              "image": "https://thumb7.shutterstock.com/display_pic_with_logo/96886/96886,1274350207,7/stock-photo-pizza-53553874.jpg",
              "description": "This is popular italian pizza flavoured with light sugary taste and creamy touch",
              "ingredients": ["deep dish pizza mix", "pizza saucce", "pizza sauce seasoning", "cheese", "sugar and cinnomon blend", "plain butter"],
              "topping": ["Pepperoni", "Chicken Sausage", "Mushroom", "Capsicum", "Black beans"]
            },
            {
              "id": "0003",
              "type": "veg",
              "price": "310",
              qty : 0,
              total : 0,
              "name": "Veggie Supreme",
              "image": "https://thumb1.shutterstock.com/display_pic_with_logo/1003451/770556520/stock-photo-hot-pizza-with-pepperoni-sausage-on-a-dark-background-with-copy-space-pizza-with-mushrooms-770556520.jpg",
              "description": "This is popular italian pizza flavoured with crushed garlic, with multiple herbs topped up with sweet corn",
              "ingredients": ["deep dish pizza mix", "pizza saucce", "pizza sauce seasoning", "cheese", "garlic herbs", "flavored butter"],
              "topping": ["Fried Onion", "Sweet corn", "Mushroom", "Capsicum", "Black olive "]
            },
            {
              "id": "0004",
              "type": "nonveg",
              "price": "400",
              qty : 0,
              total : 0,
              "name": "Tripple Chicken Feast",
              "image": "https://thumb9.shutterstock.com/display_pic_with_logo/2793292/332497832/stock-photo-mixture-pizza-italian-food-332497832.jpg",
              "description": "This is popular italian pizza flavoured with unique greek dressing topped up with keema and meat ball",
              "ingredients": ["low carb pizza dough", "pizza saucce", "pizza sauce seasoning", "cheese", "greek dressing", "cajun"],
              "topping": ["Chicken keema", "Fried Onion", "Chicken Meat ball", "Capsicum", "Sweet corn"]
            },
            {
              "id": "0005",
              "type": "nonveg",
              "price": "625",
              qty : 0,
              total : 0,
              "name": "Ultimate Chicken",
              "image": "https://thumb7.shutterstock.com/display_pic_with_logo/2793292/246331354/stock-photo-pizza-margherita-italian-246331354.jpg",
              "description": "This is popular italian pizza flavoured with BBA sauce, flavored butter. it has spongy base which gives unique taste with multiple toppings",
              "ingredients": ["deep dish pizza mix", "pizza saucce", "pizza sauce seasoning", "cheese", "BBQ sauce", "cajun", "flavored butter"],
              "topping": ["Pepperoni", "Fried Onion", "Chicken Meat ball", "Chicken Sausage", "Chicken keema"]
            },
            {
              "id": "0006",
              "type": "nonveg",
              "price": "400",
              qty : 0,
              total : 0,
              "name": "Tripple Chicken Feast",
              "image": "https://thumb9.shutterstock.com/display_pic_with_logo/2793292/332497832/stock-photo-mixture-pizza-italian-food-332497832.jpg",
              "description": "This is popular italian pizza flavoured with unique greek dressing topped up with keema and meat ball",
              "ingredients": ["low carb pizza dough", "pizza saucce", "pizza sauce seasoning", "cheese", "greek dressing", "cajun"],
              "topping": ["Chicken keema", "Fried Onion", "Chicken Meat ball", "Capsicum", "Sweet corn"]
            }
          ]
    }
    getPizzas() {
        
        return this.pizzas;
    }
    getAllTotal(){
        var allTotal = 0;
        this.pizzas.map((data,id)=>
        allTotal = allTotal + data.total
        )
        return allTotal;
    }
    addQuantity(item_id) {

        var newArray = [];
        this.pizzas.map((data, id) =>
            Number(data.id) === Number(item_id) ?
                newArray.push({
                    id: data.id,
                    type: data.type,
                    price: data.price,
                    qty: (Number(data.qty)+1),
                    total  :this.getTotal((Number(data.qty)+1),data.price),
                    name: data.name,
                    image: data.image,
                    description: data.description,
                    ingredients: data.ingredients,
                    topping: data.topping
                })
                :
                newArray.push({
                    id: data.id,
                    type: data.type,
                    price: data.price,
                    qty: data.qty,
                    total: data.total,
                    name: data.name,
                    image: data.image,
                    description: data.description,
                    ingredients: data.ingredients,
                    topping: data.topping
                })
        )
        this.pizzas = newArray;
        this.emit("change");
    }
    removeQuantity(item_id) {

        var newArray = [];
        this.pizzas.map((data, id) =>
            Number(data.id) === Number(item_id) ?
                newArray.push({
                    id: data.id,
                    type: data.type,
                    price: data.price,
                    qty: 0,
                    total  :0,
                    name: data.name,
                    image: data.image,
                    description: data.description,
                    ingredients: data.ingredients,
                    topping: data.topping
                })
                :
                newArray.push({
                    id: data.id,
                    type: data.type,
                    price: data.price,
                    qty: data.qty,
                    total: data.total,
                    name: data.name,
                    image: data.image,
                    description: data.description,
                    ingredients: data.ingredients,
                    topping: data.topping
                })
        )
        this.pizzas = newArray;
        this.emit("change");
    }
    getTotal(a,b){
        return a*b
    }
    reduceQuantity(item_id) {
        var newArray = [];
        this.pizzas.map((data, id) =>
            Number(data.id) === Number(item_id) ?
                newArray.push({
                    id: data.id,
                    type: data.type,
                    price: data.price,
                    qty: (Number(data.qty)-1),
                    total  :this.getTotal((Number(data.qty)-1),data.price),
                    name: data.name,
                    image: data.image,
                    description: data.description,
                    ingredients: data.ingredients,
                    topping: data.topping
                })
                :
                newArray.push({
                    id: data.id,
                    type: data.type,
                    price: data.price,
                    qty: data.qty,
                    total: data.total,
                    name: data.name,
                    image: data.image,
                    description: data.description,
                    ingredients: data.ingredients,
                    topping: data.topping
                })
        )
        this.pizzas = newArray;
        this.emit("change");
    }

    

    onHandleActions(action) {
        
        switch (action.type) {
            
            case "ADD_QUANTITY": {
                
                this.addQuantity(action.id);
                break;
                
            }
            case "SUB_QUANTITY": {
                this.reduceQuantity(action.id)
                break;
                
            }
            
            case "REMOVE_QUANTITY": {
                this.removeQuantity(action.id)
                break;
                
            }
             default:
        }
    }
}
const orderStore = new OrderStore();
Dispatcher.register(orderStore.onHandleActions.bind(orderStore));
export default orderStore;
 //to update the store with the new changes 
 //register dispatcher with store and bind with the action method to get the updated lsit of authors on UI