import {Dialog} from "primereact/dialog"
import { Button } from "primereact/button";
import SelectionCard from "../Cards/SelectionCard"
import spider from "../../assets/imgs/cardSpider.png"
export default function LevelSelectionModal({handleSelect=(level) => {}}){
     const levelData = [{level:"One Suit",color:"green"},{level:"Two Suits",color:"yellow"},{level:"Four Suits",color:"red"}] 

     return  <Dialog header="SELECT GAME LEVEL"  visible={true} style={{width:"70vw"}} closable={false}>
     <div className="flex flex-column md:flex-row justify-content-around align-items-center">
        {levelData.map(data => {
             return   <div key={data.level} className="flex-1 flex flex-row md:flex-column justify-content-center align-items-center gap-2 m-1">
             <SelectionCard color={data.color} content={
                  <div className="flex flex-column justify-content-start">
                            <img src={spider} />
                             <h3 className="text-center">{data.level}</h3>
                  </div>
             } /> 
             <Button label="Select" className="border-round-xl" onClick={() => {handleSelect(data.level)}}/> 
                      </div>
        })}
     </div>
           </Dialog>  

}