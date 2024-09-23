import { configureStore } from "@reduxjs/toolkit";
import { settingReducer } from "./settingsReduce";
const store =  configureStore({
         reducer:{
             settings:settingReducer,
                 }
})

export default store ;