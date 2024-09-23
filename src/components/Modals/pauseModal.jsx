import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"
export default function PauseModal({visible=true,onHide=() => {},handleExit=() => {},handleContinue=() => {}}){
     
      return <>
                      <Dialog  header="PAUSE" style={{width:"40%"}} visible={visible} onHide={onHide}  >
                               <>
                                          <div className="flex flex-column justify-content-center gap-3 p-0 md:px-8">
                                                       <Button  label="Continue"   onClick={handleContinue}/>
                                                       <Button  label="Exit Game"  onClick={handleExit} />
                                          </div>
                               </>
                      </Dialog>
             </> 
}