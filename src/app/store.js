import { configureStore } from "@reduxjs/toolkit";
import sliceCounter from "../features/sliceCounter";

export const store = configureStore({
    reducer: {
        counterSate: sliceCounter,
    }
})