import { useNavigate } from "react-router-dom";
import PauseModal from "./Modals/pauseModal";
import { memo } from "react";

const Pause = memo( ({visible,onHide}) => {
      const navigate = useNavigate()
   
      const handleExit = () => {
            navigate("/")
      } 
 
      const handleContinue = () => {
            onHide()
      }
 
      return <>
                      {visible && <PauseModal onHide={onHide} handleExit={handleExit} handleContinue={handleContinue} />}
            </>
 } )

export default  Pause