import { memo } from "react";
import LevelSelectionModal from "./Modals/levelSelectionModal";

const GameLevelSelect = memo( ({open,onSelect}) => {
      const handleSelect = (level) => {
            onSelect(level)
      }
       
      return <>
                  {!open && <LevelSelectionModal  handleSelect={handleSelect} />} 
            </> 
 
 })

export default  GameLevelSelect