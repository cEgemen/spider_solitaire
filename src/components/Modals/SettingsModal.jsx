import blue from "../../assets/cards/cardBackground/classic_blue.png"
import brown from "../../assets/cards/cardBackground/classic_brown.png"
import green from "../../assets/cards/cardBackground/classic_green.png"
import red from "../../assets/cards/cardBackground/classic_red.png"
import { Dialog } from "primereact/dialog"
import BorderEffecetBackgroundImgCard from "../Cards/BorderEffectBackgroundImgCard"
import { useEffect, useState } from "react"
import { Button } from "primereact/button"
export default function SettingsModal({isOpen=false,onHide=() => {},settingsData={backgroundCard:""},onSave=(settings) => {}}){
    const backgroundData = [{background:blue,borderColor:"blue-300"},{background:brown,borderColor:"yellow-900"},{background:green,borderColor:"green-300"},{background:red,borderColor:"red-300"}] 
    const [currentIndex , setCurrentIndex] = useState(() => {
              const index = backgroundData.findIndex(data => {
              return  data.background === settingsData.backgroundCard})
              return {index}
    })
 
    useEffect(() => {
              setCurrentIndex(() => {
              const index = backgroundData.findIndex(data => {
              return  data.background === settingsData.backgroundCard})
              return {index}
    })
    },[settingsData]) 

    const handleClick = (index) => {
             setCurrentIndex(oldState => {
                 return {index}
             })
    }

    return  <Dialog header="Setting"   visible={isOpen} style={{width:"70vw"}} closable={true} onHide={onHide}>
                 <div className="flex flex-column ">     
                    <div className="align-self-center">
                            <h3>Background Card Modal</h3>        
                    </div>  
                    <div className="flex-1 flex flex-column">
                         <div className="flex-1 flex justify-content-around align-items-center">
                            {backgroundData.map((data,index) => {
                                return   <div key={data.background} className="flex-1 flex flex-row md:flex-column justify-content-center align-items-center gap-2 m-1">
                                <BorderEffecetBackgroundImgCard  isSelected={currentIndex.index === index} borderColor={data.borderColor} src={data.background} className={"md:w-11rem md:h-15rem"} onClick={() => {handleClick(index)}}/>
                                         </div>
                                  })}    
                            </div>  
                    </div>
                            
                   <div className="flex-initial flex justify-content-end mt-3 w-full">
                          <Button  label="Save" onClick={() => onSave({backgroundCard:backgroundData[currentIndex.index].background})} /> 
                   </div> 
                     

                 </div>
          </Dialog>  
}