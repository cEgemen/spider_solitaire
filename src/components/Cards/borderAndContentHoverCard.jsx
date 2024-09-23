import { useState } from "react";
import NormalCard from "./normalCard";

export default function BorderHoverCard({hoverInitData={isHover:false,color:"white",backgroundColor},className,children,onClick=() => {}}){
       const [isHover,setHover] = useState(hoverInitData)
      
       const style = isHover.isHover ? `${className} border-3 border-${isHover.color}-300 shadow-3 ` :  `${className} border-0 bg-${isHover.color}-300 shadow-0` 

       const handleEnter = () => {
               setHover(oldState => {
                      return {...oldState,isHover:true}
               })
       }   

       const handleLeave = () => {
            setHover(oldState => {
                  return {...oldState,isHover:false}
           })
       }

      return <NormalCard className={style} onClick={onClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                 {isHover.isHover && children}
             </NormalCard>

}