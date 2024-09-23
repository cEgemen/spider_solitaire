import { useNavigate } from "react-router-dom";
import GameEndModal from "./Modals/gameEndModal";
import { memo } from "react";

const GameEnd = memo(({visible,onHide,onHandleRestart,gameEndData}) => {
      const navigate = useNavigate()
   
      const handleExit = () => {
            navigate("/")
      } 
 
      const handleRestart = () => {
            onHandleRestart()
            onHide()
      }
 
      return <>
                      {visible && <GameEndModal onHide={onHide} handleExit={handleExit} handleRestart={handleRestart} gameEndData={gameEndData}  />}
            </>
 })

export default  GameEnd