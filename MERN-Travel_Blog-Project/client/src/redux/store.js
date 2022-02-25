import { configureStore } from '@reduxjs/toolkit'
import recordReducer from "../redux/recordSlice";

export default configureStore({
    reducer: { records: recordReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});