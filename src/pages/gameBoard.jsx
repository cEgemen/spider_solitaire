import { memo, useCallback, useEffect, useRef, useState } from "react"
import GameColumn from "../components/Game/gameColumn"
import { addCardsToColumns, calculateScore, createOneSuitCard, findStartCompleteCards, hint, stockConditions } from "../utils/cardUtil"
import GameFooter from "../components/Footers/gameFooter"
import { findMoveCards } from "../utils/cardUtil"
import GameEnd from "../components/gameEnd"
import GameHeader from "../components/Headers/gameHeader"
import { timeFormatt } from "../utils/convertUtil"

export default function GameBoard({level}){
    const [column,setColumn] = useState([])
    const [cards,setCards]  = useState (createOneSuitCard(level)) 
    const [lastChange,setLastChange] = useState({cardColumn:[],dropColumn:[],completedColumnId:[],stock:[]})
    const [gameHints,setGameHints] = useState({hints:null,count:-1,isClick:false})
    const [finishData , setFinishData] = useState({isOpen:false,header:"",data:{}})
    const [time,setTime] = useState({time : 0})
    const [score,setScore] = useState({score : 0})
    const timer = useRef()

    useEffect(() =>{
        setColumn(oldState => {
              const newColumn = addCardsToColumns(cards)
              return [...newColumn]
        }) 
        timer.current = setInterval(() => {
                setTime(oldState => {
                     const time = oldState.time + 1
                     return {time}
                })
       },1000) 
    return () => {
         clearInterval(timer.current)
    }
    },[])

    useEffect(() => {
        console.log("lastChange  :  ",lastChange)
        const data = findStartCompleteCards(column.slice(0,10))
        let emptyColumnIndex ;
         if(data.columnId !== null)
         {
              setColumn(oldColumn => {
                    const tmpColumn = [...oldColumn[data.columnId]]
                    const completedCard = []
                    const filterColumn = tmpColumn.filter((card,index) => {
                             if(index >= data.startIndex)
                             { 
                                 completedCard.push(card)      
                                 return false
                             }
                               return true

                    })
                    const newColumn = filterColumn.map((card , index) => {
                                if(index === filterColumn.length-1 && card.isOpen === false)
                                {
                                    return {...card,isOpen:true}
                                }
                                return card
                    })
                    let done = true;
                   const newColumns = oldColumn.map((column,index) => {
                              if(data.columnId === index)
                              {
                                  return newColumn
                              }
                              if(index >= 11 && column.length === 0 && done)
                              {
                                  done = false
                                  emptyColumnIndex = index
                                  return completedCard  
                              }
                              return column 
                   }) 
                   return newColumns
                    
              })
            
              setLastChange(oldState => {
                const newCompetedColumnId = oldState.completedColumnId.slice(0,oldState.completedColumnId.length-1)
                return {cardColumn:[...oldState.cardColumn],dropColumn:[...oldState.dropColumn],completedColumnId:[...newCompetedColumnId,emptyColumnIndex],stock:[...oldState.stock]}
                                       })
         
              setScore(oldState => {
                  const score = calculateScore(level,"completed","inc",oldState.score)   
                  return {score}
              })                          
         }
        if(column.length !== 0)  
         {
          const hints = hint(column)
          console.log("hints : ",hints)
          console.log("emptyColumnIndex : ",emptyColumnIndex)
          if(lastChange.completedColumnId[lastChange.completedColumnId.length - 1] === column.length - 1)
            {
               clearInterval(timer.current) 
               setFinishData(oldState => {
                       console.log("totla score : ",calculateScore(level,"end","",score.score,time.time))
                       return {isOpen:true , header : "Won" ,data: {time:timeFormatt(time.time),score:calculateScore(level,"end","",score.score,time.time)}}
               })
            }
         else if(hints[0].end !== undefined && hints[0].end.true)
          {
            clearInterval(timer.current)
            setFinishData(oldState => {
                return {isOpen:true , header : "Lost" ,data:{time:timeFormatt(time.time),score:calculateScore(level,"end","",score.score,time.time)}}
        })
          }
          else{
              setGameHints(oldState => {
                  return {hints,count:-1,isClick:false}  
                                       })
          }
        }  
    },[column])

    const updateColumn = useCallback((cardData,dropColumnId,dragColumnId) => {
        const {columnId,index} = cardData
        const tmpCardColumnCards = [...column[columnId]]
        const {cards,info} = findMoveCards(index,tmpCardColumnCards)
        const oldCardColumn = [...column[dragColumnId]]
        const oldDropColumn = [...column[dropColumnId]]
        const oldDropColumnLength = oldDropColumn.length
        const oldDragColumnLength = oldCardColumn.length
        setColumn(oldColumn => {
                  
                  const dragColumn = column[dragColumnId].filter((card,index) => {
                         
                        if (info.includes(index))
                         {
                               return false
                         }
                               return true
                })
                 const newDragColumn = dragColumn.map((card,index) => {
                                 if(index === dragColumn.length - 1)
                                 {
                                   return {...card,isOpen:true}
                                 }
                                   return card
                  })
                  const tmpDropColumn = [...column[dropColumnId],...cards]
                  const newDropColumn = tmpDropColumn.map((card , index) => {
                                  if(card.columnId !== dropColumnId)
                                  {
                                      return {...card,columnId:dropColumnId}
                                  }
                                  return card
                  })
                 
                  return oldColumn.map((column,index) => {
                             if(index === dropColumnId)
                             {
                                 return newDropColumn
                             }
                             else if (index === dragColumnId)
                             {
                                  return newDragColumn  
                             }
                             return column
                  })
           })
           if(oldDropColumnLength !== 0 && oldDragColumnLength !== 1)
           {
              setScore(oldState => {
                  const score1 = calculateScore(level,"switch","inc",oldState.score)
                  const score =  calculateScore(level,"merge","inc",score1) 
                 return {score}
              })
           }
           else if(oldDropColumnLength !== 0 && oldDragColumnLength === 1){
            setScore(oldState => {
                const score = calculateScore(level,"merge","inc",oldState.score)  
               return {score}
            })
           }
           else if(oldDropColumnLength === 0 && oldDragColumnLength !== 1)
           {
            setScore(oldState => {
                const score = calculateScore(level,"switch","inc",oldState.score)  
               return {score}
            })
           }
           setLastChange(oldState => {
                    return {cardColumn:[...oldState.cardColumn,{column:oldCardColumn,index:dragColumnId}],dropColumn:[...oldState.dropColumn,{column:oldDropColumn,index:dropColumnId}],completedColumnId:[...oldState.completedColumnId,null],stock:[...oldState.stock,null]}
           } )

    },[column,setColumn,setLastChange]) 

    const distributeCardStock = useCallback(() => {
        const tmpColumns = [...column]
        const completedColumn = tmpColumns.slice(11,19)
        const oldGameColumn = tmpColumns.slice(0,10)
        const oldStockColumn = tmpColumns[10]
             const condition = stockConditions(oldStockColumn,oldGameColumn) 
            if(!condition)
            {
                return 
            }
            setColumn(oldColumn => {
            const stockCards = []
                const newStock = oldStockColumn.filter((card,index) => {
                             if( index >= oldStockColumn.length - 10 )
                             {
                                 stockCards.push({...card,isOpen:true,columnId:stockCards.length})  
                                 return false
                             }
                                 return true
                })
               const newGameColumns =  oldGameColumn.map((column,index) => {
                      const newColumn = [...column,stockCards[index]]
                      return newColumn
                })
               return [...newGameColumns,newStock,...completedColumn]
            })
            setLastChange(oldState => {
                return {cardColumn:[...oldState.cardColumn,null],dropColumn:[...oldState.dropColumn,null],completedColumnId:[...oldState.completedColumnId,null],stock:[...oldState.stock,true]}
          })
    },[column,setColumn,setLastChange]) 
 
    const handleReplay = useCallback(() => {
           if(lastChange.cardColumn.length !== 0 )
           { 
              const tmpLastChange = {...lastChange}
              const lastCardColumn = tmpLastChange.cardColumn.pop()
              const lastDropColumn = tmpLastChange.dropColumn.pop()
              const lastCompletedId = tmpLastChange.completedColumnId.pop()
              const lastStock = tmpLastChange.stock.pop()
              let lastCardColumnLength;
              let lastDropColumnLength;
            if(lastCardColumn !== null && lastDropColumn !== null)
            {
              lastCardColumnLength = lastCardColumn.column.length
              lastDropColumnLength = lastDropColumn.column.length 
            }
              
            
               if(lastCardColumn !== null && lastDropColumn !== null && lastCompletedId !== null)
               {
                                 setColumn(oldState => {
                                    const tmpColumns = [...oldState]
                                    return tmpColumns.map((column,index) => {
                                        if(index === lastDropColumn.index)
                                            {
                                                  return [...lastDropColumn.column]
                                            }
                                            if(index === lastCardColumn.index)
                                            {
                                                 return [...lastCardColumn.column]
                                            }
                                            if(index === lastCompletedId)
                                            {
                                                 return []
                                            }
                                            return column
                                    })
                                 }) 
                                      if(lastCardColumnLength === 1)
                                        {
                                             setScore(oldState => {
                                                 const score3 = calculateScore(level,"completed","decr",oldState.score)  
                                                 const score2 = calculateScore(level,"merge","decr",score3)
                                                 const score = calculateScore(level,"back","inc",score2)
                                                 return {score}
                                             })            
                                        }   
                                      else{
                                         setScore(oldState => {
                                            const score3 = calculateScore(level,"completed","decr",oldState.score)  
                                            const score2 = calculateScore(level,"merge","decr",score3)
                                            const score1 = calculateScore(level,"switch","decr",score2)
                                            const score = calculateScore(level,"back","inc",score1)
                                            return {score}
                                        })   
                                         }                                    
               }
               else if(lastCardColumn !== null && lastDropColumn !== null)
               {
                  setColumn(oldState => {
                         const tmpColumns = [...oldState]
                         const newColumns = tmpColumns.map((column,index) => {
                                 if(index === lastDropColumn.index)
                                 {
                                       return [...lastDropColumn.column]
                                 }
                                 if(index === lastCardColumn.index)
                                 {
                                      return [...lastCardColumn.column]
                                 }
                                 return column
                         }) 
                        return newColumns  
                  })  

                  if(lastDropColumnLength !== 0 && lastCardColumnLength !== 1)
                    {
                       setScore(oldState => {
                            console.log("oldScore : ",oldState.score)
                           const score2 = calculateScore(level,"back","inc",oldState.score)
                           const score1 = calculateScore(level,"switch","desc",score2)
                           const score =  calculateScore(level,"merge","desc",score1)
                          return {score}
                       })
                    }
                    else if(lastDropColumnLength !== 0 && lastCardColumnLength === 1){
                     setScore(oldState => {
                        const score1 = calculateScore(level,"back","inc",oldState.score)
                         const score = calculateScore(level,"merge","desc",score1)  
                        return {score}
                     })
                    }
                    else if(lastDropColumnLength === 0 && lastCardColumnLength !== 1)
                    {
                     setScore(oldState => {
                        const score1 = calculateScore(level,"back","inc",oldState.score)
                         const score = calculateScore(level,"switch","desc",score1)  
                        return {score}
                     })
                    } 
            
               }
               else if(lastStock === true)
               {
                  setColumn(oldState => {
                      const backStockCard = []
                      const tmpColumns = [...oldState]
                      const emptyColumns = tmpColumns.slice(11,19)
                      const newGameColumn = tmpColumns.slice(0,10).map((column,index) => {
                                 const tmpColumn = [...column]
                                 const card = tmpColumn.pop()
                                 backStockCard.push(card)
                                 return tmpColumn
                      })
                      const newStock = [...tmpColumns[10],...backStockCard]
                      return [...newGameColumn,newStock,...emptyColumns]
                  })
                      
               }
               setLastChange(oldState => {
                     return {...tmpLastChange}
               })
           }
    },[lastChange,setLastChange,setColumn,setScore]) 

    const handleHint =useCallback(() => {
          setGameHints(oldState => {
                   const count = oldState.count !== oldState.hints.length - 1 ? oldState.count + 1 : 0
                   return {...oldState,count,isClick:true}
          })
    },[setGameHints]) 

    const handleRestart = useCallback(() => {
        setColumn(oldState => {
            setScore(oldState => {
                 return {score : 0}
            })
            setTime(oldState => {
                 return {time:0}
            })
            const newColumn = addCardsToColumns(createOneSuitCard(level))
            return [...newColumn]
      }) 
    },[setColumn]) 

    const HeaderChildren = memo(() => {
         return  <div className="flex justify-content-evenly align-items-center bg-gray-200 border-round-3xl m-0 md:mx-3 opacity-">
         <h3 className="m-0">Skor : {score.score} </h3>
         <h1 className="m-0">Spider {level}</h1>
         <h3 className="m-0">Time :  {timeFormatt(time.time)} </h3>   
</div>
    })

    return <>
                <div className="flex flex-column w-full ">
                        <div className="flex-initial  w-full p-0 px-2 py-2 ">
                                    <GameHeader  >
                                       <HeaderChildren />
                                    </GameHeader>
                        </div>
                        <div className="flex-initial flex justify-content-between align-items-start p-0 pb-8 px-2 ">
                      
                            <div className="flex-1 ">
                                     <GameColumn cards={column[10]} id={10} type="stock" onClick={distributeCardStock} hintData={gameHints}/> 
                            </div>
                            <div className="flex-1 flex gap-3 ">
                                    {column.slice(11,19).map((cards,index) => {
                                        return <GameColumn key={index} cards={cards} id={index}  type="empty"  />
                                       
                                    })}
                            </div>      
                        </div>
                        <div className="flex-1 flex  justify-content-between align-items-start p-0 px-2 ">
                                   {column.slice(0,10).map((cards,index) => {
                                        return <GameColumn key={index} id={index} cards={cards} type="game" onUpdate={updateColumn} hintData={gameHints} />
                                       
                                   })}
                        </div>
                        <div className="flex-initial  w-full p-0 px-2 py-2 ">
                                               <GameFooter handleReplay={handleReplay} handleHint={handleHint} />
                              </div>
                </div>

                 { <GameEnd visible={finishData.isOpen} gameEndData={{header:finishData.header,data:finishData.data}} onHandleRestart={handleRestart} onHide={() => {
                            setFinishData(oldState => {
                                    return {...oldState,isOpen:false}
                            })
                 }} />
                 }
               
          </>

}