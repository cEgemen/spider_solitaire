import { useDrag,DragPreviewImage } from "react-dnd";
import { useSelector } from "react-redux"
import { canDrag } from "../../utils/cardUtil";
import { memo } from "react";

const GameCard = memo(({type,card,index,cards,isHint}) => {
     const {backgroundCard} = useSelector(state => state.settings)
     const canDrg =canDrag(card,index,cards,type)
     let caseStyle ;
     const [{isDragging},drag,preview] =  useDrag(() => ({
           type:"card",
           item:{index,type:card.type,level:card.level,columnId:card.columnId,isOpen:card.isOpen},
           canDrag : true,
           collect:(monitor) => {
              return {isDragging : monitor.isDragging()}
           }
     }))
      
     if(type === "empty")
            {
                 caseStyle ={position:"absolute",backgroundImage:`url(${card.src})`,backgroundSize:"100% 100%"}
            }
            else if(type === "stock")  
            {
                    
                 caseStyle ={position:"absolute",top:`${Math.floor(index / 10) * 15}px`,backgroundImage:`url(${backgroundCard})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}
            }
            else { 
                 const img = card.isOpen ? card.src : backgroundCard
                 caseStyle ={position:"absolute",top:`${index * 15}px`, opacity: isDragging ? 0 : 1 ,
                 cursor: 'move',backgroundImage:`url(${img})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}
            }
     return <>
                    { canDrg && <>
                       <DragPreviewImage connect={preview} src={card.src} className="w-6rem h-8rem border-round-2xl"  />
                       <div ref={drag} className={`flex-1  w-6rem h-9rem border-round-2xl   ${isHint && "border-3 border-gray-900 shadow-6"}`} style={caseStyle}  />
                                </> 
                                 }
                    {!canDrg  && <div  className={`flex-1  w-6rem h-9rem border-round-2xl  ${isHint && "border-3 border-gray-900 shadow-6"}`} style={caseStyle}  />}   
           </> 
     
    

})

export default  GameCard;