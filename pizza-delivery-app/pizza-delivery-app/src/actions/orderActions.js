import Dispatcher from "../dispatcher/appDispatcher";

export function addQuantity(id) {
    Dispatcher.dispatch({
        type: "ADD_QUANTITY",
        id
    }
    )
}
export function reduceQuantity(id) {
    Dispatcher.dispatch({
        type: "SUB_QUANTITY",
        id
    }
    )
}
export function removeQuantity(id) {
    Dispatcher.dispatch({
        type: "REMOVE_QUANTITY",
        id
    }
    )
}