import { createSlice } from "@reduxjs/toolkit";
import blue from "../assets/cards/cardBackground/classic_blue.png"

const initialState={backgroundCard:blue}

const reduce = createSlice({
     name:"settings",
     initialState,
     reducers:{
         updateBackgroundCard(state,action){
              state.backgroundCard = action.payload.backgroundCard
         }
     }
})

export const settingsActions = reduce.actions
export const settingReducer = reduce.reducer