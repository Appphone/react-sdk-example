import { Action, configureStore } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import logMiddleware from "./logMiddleware";
import reducer from "./reducer";
import socketMiddleware from "./socketMiddleware";

const store = configureStore({
    reducer,
    middleware: [logMiddleware, socketMiddleware],
});

if (process.env.NODE_ENV === "development" && module.hot) {
    module.hot.accept("./reducer", () => {
        const newRootReducer = require("./reducer").default;
        store.replaceReducer(newRootReducer);
    });
}

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
