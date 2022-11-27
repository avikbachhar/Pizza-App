import {  EventEmitter} from "events";
import Dispatcher from '../dispatcher/appDispatcher';
import orderStore from '../store/orderStore';
import ingredientStore from '../store/ingredientStore';

class ShoppingStore extends EventEmitter {


    getTotal() {
        
        return (orderStore.getAllTotal()+ingredientStore.getTotal());
    }
    getGovtTax() {
        
        return (((orderStore.getAllTotal()+ingredientStore.getTotal())*9)/100);
    }
    getDeliveryCharge() {
        
        return (((orderStore.getAllTotal()+ingredientStore.getTotal())*3)/100);
    }
    getPayable() {
        
        return (this.getTotal()+this.getGovtTax()+this.getDeliveryCharge()).toFixed (2);
    }
    onHandleActions(action) {
        
        switch (action.type) {
            
            case "INCREMENT": {
                break;
                
            }
            case "DECREMENT": {
                break;
                
            }
             default:
        }
    }
}
const shoppingStore = new ShoppingStore();
Dispatcher.register(shoppingStore.onHandleActions.bind(shoppingStore));
export default shoppingStore;
 //to update the store with the new changes 
 //register dispatcher with store and bind with the action method to get the updated lsit of authors on UI