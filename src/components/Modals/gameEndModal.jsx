
import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"
export default function GameEndModal({visible=true,gameEndData={heade:"",data:{skor : 130 , time : 11.00}},onHide=() => {},handleExit=() => {},handleRestart=() => {}}){
      const {header,data} = gameEndData
      return <>
                      <Dialog  style={{width:"50%"}} visible={visible} onHide={onHide} closable={false}  >
                               <>
                                        <div className="flex  flex-column ">
                                         <div className="flex-initial">
                                                 <h1 className="text-center m-0"> You {header}</h1>
                                         </div>   
                                         <div className="flex-initial flex justify-content-around ">
                                             <h3>
                                                    Skor : {data.score}
                                             </h3>
                                             <h3>
                                                    Time : {data.time}
                                             </h3>
                                         </div>
                                         <div className="flex-1 flex flex-column  gap-3 p-0 ">
                                                       
                                                       <Button className="w-20rem align-self-center" label="Restart"   onClick={handleRestart}/>
                                                       <Button className="w-20rem align-self-center" label="Exit Game"  onClick={handleExit} />
                                          </div>

                                        </div>

                               </>
                      </Dialog>
             </> 
}