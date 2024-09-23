import { Avatar } from "primereact/avatar"
import { memo } from "react"

const GameFooter = memo(({handleReplay,handleHint}) => {
     console.log("Game Footer")

    return <>
                     <div className="flex justify-content-center gap-6">
                       <div>
                           <Avatar icon="pi pi-replay" shape="circle" onClick={handleReplay}/>
                       </div>
                       <div>
                           <Avatar icon="pi pi-question" shape="circle" onClick={handleHint}/>
                       </div>
                             
                   </div>
           </>

})

export default  GameFooter