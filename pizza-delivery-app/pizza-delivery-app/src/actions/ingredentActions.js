import Dispatcher from "../dispatcher/appDispatcher";

export function select(id) {
    Dispatcher.dispatch({
        type: "SELECT",
        id
    }
    )
}
export function deselect(id) {
    Dispatcher.dispatch({
        type: "DESELECT",
        id
    }
    )
}

export function removeSelection(id) {
    Dispatcher.dispatch({
        type: "REMOVESELECT",
        id
    }
    )
}