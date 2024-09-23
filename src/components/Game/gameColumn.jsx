import GameCard from "./gameCard"
import { useDrop } from "react-dnd";
import { compaireCardLevel } from "../../utils/cardUtil";
import { memo } from "react";
 
const  GameColumn = memo(({type,cards=[],onUpdate,id,onClick=() => {},hintData={hints:[],count:0,isClick:false}}) => {
    let caseStyle = cards.length === 0 ? {backgroundColor:"white",opacity:".3"} : {};
    const {hints,count,isClick} = hintData 
    let isHint = false
    const [{ isOver }, dropRef] = useDrop({
        accept: 'card',
        canDrop :(item , monitor) => {
               
               const result = compaireCardLevel(item,cards)              
               return result
        },

        drop: (item) => {
              onUpdate(item,id,item.columnId)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

   if(type === "empty")
   {
      caseStyle = {position:"relative",...caseStyle}
   }
   else if(type === "stock")  
   {
       caseStyle = {position:"relative",...caseStyle}
   }
   else { 
        caseStyle = {position:"relative",...caseStyle}
        
   }
    return <>
                <div className={`flex w-6rem h-9rem  border-round-2xl ${(isClick && cards.length === 0 && hints[count].columnIndex === id) ? "border-3 border-gray-900 shadow-8" : ""}`} ref={dropRef} style={caseStyle} onClick={onClick}>
                      {cards.map((data,cardIndex) => {
                          
                          if(type === "stock")
                          {
                            isHint = isClick && (hints[count].stock !== undefined && hints[count].stock === true) &&  (cards.length - 1 === cardIndex) 
                          }
                          else if(type === "game" )
                          {
                            isHint = isClick && hints[count].stock === undefined && ((hints[count].slice.card.columnId === id && hints[count].slice.index <= cardIndex ) || (hints[count].columnIndex === id && cards.length - 1 === cardIndex ))
                          }
                                  return <GameCard key={data.level  + cardIndex + data.isOpen} index={cardIndex} columnId = {id} card={data} cards={cards} type={type} isHint={isHint} />
                      })}
                </div>
          </>

})


export default GameColumn