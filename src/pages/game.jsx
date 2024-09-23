import GameLevelSelect from "../components/gameLevelSelect";
import background from "../assets/imgs/background.jpg"
import { useState } from "react";
import GameBoard from "./gameBoard";

export default function Game(){
     const [isStart,setStart] = useState({start:false,level:null})
     return <>
                 <GameLevelSelect open={(isStart.start)} onSelect={(level) => {setStart(oldState => {
                       return {start:true,level}
                 })}} />
                <div className="flex flex-column w-full h-full" style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"100% 100%"}}>
                               <div className="flex-1 flex">
                                          {isStart.start && <GameBoard level={isStart.level} /> }
                              </div>                  
                </div>
            </>
      
}