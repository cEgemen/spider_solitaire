import NormalButton from "./normalButtons";
import spider from "../../assets/imgs/homeSpider.png"
import { useState } from "react";

export default function HoverIconWithButton({text="",className="",onClick=() => {}}){
        const [isHover,setHover] = useState({hover:false})
       
        const handleMouseEnter = () => {
                  setHover(oldstate => {
                      return {hover:true}
                  })
        }
        const handleMouseLeave = () => {
            console.log("leave")
            setHover(oldstate => {
                return {hover:false}
            })
        }

        return  <div className="flex flex-column align-items-center">
                     <div className="flex-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <NormalButton text={text} className={`${className} border-circle w-5rem h-5rem flex justify-content-center`} onClick={onClick}/>
                     </div>
                     <div className="flex-initial h-1rem">
                        {isHover.hover && <img src={spider} className={``} />}
                     </div>
                        
                        
                </div>

}