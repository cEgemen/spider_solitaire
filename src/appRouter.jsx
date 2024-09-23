
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Game from "./pages/game";

export const appRouter = createBrowserRouter([
      {path:"/",children:[
           {index:true,element:<Home />},
           {path:"game",element:<Game/>}
      ]}
])