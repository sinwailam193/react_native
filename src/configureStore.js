import { Platform } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const compostMiddleware = compose(applyMiddleware(thunk));

export default function configureStore(initialState = null) {
    const store = createStore(reducer, initialState, compostMiddleware);
    if (module.hot) {
        module.hot.accept(() => {
            store.replaceReducer(require("./reducers").default);
        });
    }
    return store;
}
