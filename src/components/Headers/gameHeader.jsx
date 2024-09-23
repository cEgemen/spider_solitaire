import {Avatar} from "primereact/avatar"
import Settings from "../settings"
import { memo, useCallback, useState } from "react"
import Pause from "../pause"

const GameHeader = memo(({children}) => {
    const modalType=["settings","pause"]
    const [modalState , setModalState] = useState({open:false,type:null})  
    
    const handleModal =  (type) => {
              setModalState(oldState => {
                    return {open:true,type}
              })               
    }   

    const handleHide = useCallback(() => {
        setModalState(oldState => {
            return {...oldState,open:false}
     })
    },[setModalState])

    return <>
            <div className="flex justify-content-between align-items-center">
              <div className="flex-initial">
                   <Avatar icon="pi pi-wrench" shape="circle" onClick={() => {handleModal(modalType[0])}}/>
               </div>
               <div className="flex-1">
                       {children}  
                </div>             
                <div className="flex-initial">
                    <Avatar icon="pi pi-pause" shape="circle" onClick={() => {handleModal(modalType[1])}}/>
                </div>          
            </div>
                    <Settings  visible={modalState.open && modalState.type === modalType[0]} onHidden={handleHide} />
                    <Pause  visible={modalState.open && modalState.type === modalType[1]} onHide={handleHide} />
           </>

})

export default  GameHeader