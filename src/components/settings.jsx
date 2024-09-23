import { useDispatch,useSelector } from "react-redux"
import { settingsActions } from "../management/settingsReduce"
import SettingsModal from "./Modals/SettingsModal"
import { memo } from "react"

const Settings = memo(({visible,onHidden}) => {
      const {backgroundCard} = useSelector(state => state.settings)
      const dispatch = useDispatch()
      
      const handleSave = (settings) => {
            dispatch(settingsActions.updateBackgroundCard({backgroundCard:settings.backgroundCard})) 
      }
      return <>
                    <SettingsModal isOpen={visible} onHide={onHidden} settingsData={{backgroundCard}}  onSave={handleSave}/>
             </>
})

export default  Settings