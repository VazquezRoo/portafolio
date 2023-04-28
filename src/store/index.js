import { configureStore } from "@reduxjs/toolkit";
import action from "./slice/actions.slice";

export default  configureStore({
    reducer:{
        action
    }
})