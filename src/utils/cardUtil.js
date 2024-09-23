
const IMG_PATH = "/cards/"

export function createOneSuitCard(level){
     const mixCards = []
     const type = "spades"
     const type2 = "hearts"
     const type3 = "diamonds"
     const type4 = "clubs"

      const cards = [{type:type,level:"A",src:`${IMG_PATH}${type}/1.png`},{type:type,level:"2",src:`${IMG_PATH}${type}/2.png`},{type:type,level:"3",src:`${IMG_PATH}${type}/3.png`},{type:type,level:"4",src:`${IMG_PATH}${type}/4.png`},{type:type,level:"5",src:`${IMG_PATH}${type}/5.png`},{type:type,level:"6",src:`${IMG_PATH}${type}/6.png`},{type:type,level:"7",src:`${IMG_PATH}${type}/7.png`},{type:type,level:"8",src:`${IMG_PATH}${type}/8.png`},{type:type,level:"9",src:`${IMG_PATH}${type}/9.png`},{type,level:"10",src:`${IMG_PATH}${type}/10.png`},{type:type,level:"J",src:`${IMG_PATH}${type}/11.png`},{type:type,level:"Q",src:`${IMG_PATH}${type}/12.png`},{type:type,level:"K",src:`${IMG_PATH}${type}/13.png`}] 

     const cards1 = [{type:type2,level:"A",src:`${IMG_PATH}${type2}/1.png`},{type:type2,level:"2",src:`${IMG_PATH}${type2}/2.png`},{type:type2,level:"3",src:`${IMG_PATH}${type2}/3.png`},{type:type2,level:"4",src:`${IMG_PATH}${type2}/4.png`},{type:type2,level:"5",src:`${IMG_PATH}${type2}/5.png`},{type:type2,level:"6",src:`${IMG_PATH}${type2}/6.png`},{type:type2,level:"7",src:`${IMG_PATH}${type2}/7.png`},{type:type2,level:"8",src:`${IMG_PATH}${type2}/8.png`},{type:type2,level:"9",src:`${IMG_PATH}${type2}/9.png`},{type:type2,level:"10",src:`${IMG_PATH}${type2}/10.png`},{type:type2,level:"J",src:`${IMG_PATH}${type2}/11.png`},{type:type2,level:"Q",src:`${IMG_PATH}${type2}/12.png`},{type:type2,level:"K",src:`${IMG_PATH}${type2}/13.png`}]

      const cards2 = [{type:type3,level:"A",src:`${IMG_PATH}${type3}/1.png`},{type:type3,level:"2",src:`${IMG_PATH}${type3}/2.png`},{type:type3,level:"3",src:`${IMG_PATH}${type3}/3.png`},{type:type3,level:"4",src:`${IMG_PATH}${type3}/4.png`},{type:type3,level:"5",src:`${IMG_PATH}${type3}/5.png`},{type:type3,level:"6",src:`${IMG_PATH}${type3}/6.png`},{type:type3,level:"7",src:`${IMG_PATH}${type3}/7.png`},{type:type3,level:"8",src:`${IMG_PATH}${type3}/8.png`},{type:type3,level:"9",src:`${IMG_PATH}${type3}/9.png`},{type:type3,level:"10",src:`${IMG_PATH}${type3}/10.png`},{type:type3,level:"J",src:`${IMG_PATH}${type3}/11.png`},{type:type3,level:"Q",src:`${IMG_PATH}${type3}/12.png`},{type:type3,level:"K",src:`${IMG_PATH}${type3}/13.png`}]

     const cards3 = [{type:type4,level:"A",src:`${IMG_PATH}${type4}/1.png`},{type:type4,level:"2",src:`${IMG_PATH}${type4}/2.png`},{type:type4,level:"3",src:`${IMG_PATH}${type4}/3.png`},{type:type4,level:"4",src:`${IMG_PATH}${type4}/4.png`},{type:type4,level:"5",src:`${IMG_PATH}${type4}/5.png`},{type:type4,level:"6",src:`${IMG_PATH}${type4}/6.png`},{type:type4,level:"7",src:`${IMG_PATH}${type4}/7.png`},{type:type4,level:"8",src:`${IMG_PATH}${type4}/8.png`},{type:type4,level:"9",src:`${IMG_PATH}${type4}/9.png`},{type:type4,level:"10",src:`${IMG_PATH}${type4}/10.png`},{type:type4,level:"J",src:`${IMG_PATH}${type4}/11.png`},{type:type4,level:"Q",src:`${IMG_PATH}${type4}/12.png`},{type:type4,level:"K",src:`${IMG_PATH}${type4}/13.png`}] 
    
     const totalCards = []
   if(level === "One Suit")
    {
       for(let i = 0 ; i < 8 ; i ++)
      {
             for(let j = 0 ; j<cards.length; j++)
             {
                    totalCards.push(cards[j])
             }
      }  
    } 
   else if(level === "Two Suits")
    {
        for(let i = 0 ; i < 8 ; i ++)
            {
                if(i < 4)
                {
                     for(let j = 0 ; j<cards.length; j++)
                   {
                          totalCards.push(cards[j])
                   }
                }
                  else{
                    for(let j = 0 ; j<cards1.length; j++)
                        {
                               totalCards.push(cards1[j])
                        }
                  }
            }  
    }  
   else {
    for(let i = 0 ; i < 8 ; i ++)
        {
            if(i < 2)
                {
                     for(let j = 0 ; j<cards.length; j++)
                   {
                          totalCards.push(cards[j])
                   }
                }
                  else if (i < 4){
                    for(let j = 0 ; j<cards1.length; j++)
                        {
                               totalCards.push(cards1[j])
                        }
                  }
                  else if (i < 6){
                    for(let j = 0 ; j<cards2.length; j++)
                        {
                               totalCards.push(cards2[j])
                        }
                  }
                  else {
                    for(let j = 0 ; j<cards3.length; j++)
                        {
                               totalCards.push(cards3[j])
                        }
                  }

        }  

   }  
        
           const numbers = []
                while(true)
                {
                    if(numbers.length === totalCards.length)
                    {
                         break
                    }
                    let number = Math.floor(Math.random() * totalCards.length)
                    if(!numbers.includes(number))
                    {
                        mixCards.push(totalCards[number])
                        numbers.push(number)
                    }
                }


      return mixCards

}

export function addCardsToColumns(cards){
    const column = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
     let index = 0 
    for(let i = 0 ; i<cards.length ; i++)
    {
       
        if( i < 24)
         {
             if(column[index].length === 6)
             {
                  index ++
             }
 
            column[index].push({...cards[i],columnId:index,isOpen:column[index].length === 5})
         
             if( i + 1 === 24)
             {
                 index ++; 
             }
             
         }
        else if( i  < 54 ) 
        {
            if(column[index].length === 5)
                {
                     index ++
                }
    
               column[index].push({...cards[i],columnId:index,isOpen:column[index].length === 4})

               if(i + 1 === 54)
               {
                    index ++
               }
        }
        else{
           
               column[index].push({...cards[i],columnId:index,isOpen:false})
        }
    }
  
     return column
}

export function compaireCardLevel(card1,card2)
{
    const cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    if(card2.length === 0)
    {
        return true
    }
    const index1 = cards.indexOf(card1.level)
    const index2 = cards.indexOf(card2[card2.length-1].level)

    if((index1 === index2 - 1) && (card1.type === card2[card2.length-1].type))
    {
        return true
    }
        return false
}

export function stockConditions(stock,gameColumn){
      const gameColumnCondition = gameColumn.every((column) => {
           return column.length > 0
      })

      if(stock.length === 0 || !gameColumnCondition)
      {
          return false
      }

          return true
      
}

export function findStartCompleteCards(columns){
    const cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]  
    let completeData = {columnId:null,startIndex:null};
      for(let i = 0 ; i < columns.length ; i ++ )
      {
            if(columns[i].length > 0 )
            {
                const column = columns[i]
                let cardIndex = cards.length-1
                     for(let j = 0 ; j < column.length ; j ++) 
                     {
                         let card = column[j]
                         let type = card.type
                         let index = j
                         cardIndex = cards.length - 1
                        if(card.isOpen && card.level === "K")   
                         while(true)
                          {
                              if(cardIndex === -1)        
                              {
                                  completeData={columnId:card.columnId,startIndex:j}
                                  return completeData
                              }
                              if(index >= column.length)
                              {
                                  break
                              }
                              let tmpCard = column[index]
                              let tmpType = column[index].type
                              if((cards.indexOf(tmpCard.level) !== cardIndex ) && type === tmpType)
                               {
                                   break
                               }
                              cardIndex --;
                              index ++
                          }

                     }
            }
      }
      return completeData
}

export function findMoveCards(dragCardIndex,cards){
     const moveCards =[]
     const info = []
     for(let i = dragCardIndex ; i < cards.length ; i++)
     {
         moveCards.push(cards[i])
         info.push(i)
     }
       return {cards:moveCards,info}
}

export function canDrag(card,cardIndex,cards,type){
    const levelArr = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]  
    let can = false 
    let startArrIndex = levelArr.indexOf(card.level) - 1     
      if(card.isOpen && type === "game")
      {
  if(cardIndex === cards.length -1)
          {
             can = true
             return can;
          }
  let startCardsIndex = cardIndex + 1
    while(true)
          {
      if(startCardsIndex === cards.length)
              {
                  can = true;
                  return can
              }
     if(cards[startCardsIndex].level !== levelArr[startArrIndex])
              {
                    break
              }
              startArrIndex --;
              startCardsIndex ++;
          }
      }
      return can

}


export function hint(columns){
        const levelArr = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]  
        const hints = []
        const tmpColumns = [...columns]
        const gameColumns = tmpColumns.slice(0,10)
        const stockColumnLength = tmpColumns[10].length
        gameColumns.forEach((column,index) => {
                 const columnsSlice = []
               if(column.length !== 0)  
                {
                    const columnSlice = []
                     column.forEach((card,index) => {    
                        if(card.isOpen)
                        {
                           let cardLevelArrIndex = levelArr.indexOf(card.level)         
                           let cardIndex = index 
                           let done = false
                           let sliceCards = []
                           while(true)
                           {
                              if(cardIndex === column.length)
                               {
                                    done = true
                                    sliceCards.push({card:column[index],index})
                                    break
                               }
                 if((column[cardIndex].level !== levelArr[cardLevelArrIndex]) || ( column[cardIndex].type !== column[index].type ) )
                               {
                                     break
                               }
                               cardLevelArrIndex --
                               cardIndex ++
                           }
                           if(done)
                           {
                              columnSlice.push(...sliceCards)
                           }
                        }
                 })
                       columnSlice.forEach((slice,innerIndex) => {
                             const sliceData = [] 
                             for(let j = 0 ; j< gameColumns.length ; j++)          
                              {
                                      if(j !== index)
                                      {
                                            if(gameColumns[j].length === 0)
                                                {
                                                     sliceData.push({slice,columnIndex:j})
                                                } 
                                             else{
 if((levelArr.indexOf(slice.card.level) === levelArr.indexOf(gameColumns[j][gameColumns[j].length - 1].level) - 1) && (slice.card.type === gameColumns[j][gameColumns[j].length - 1].type))
                                                     {
                                                        sliceData.push({slice,columnIndex:j})
                                                     }
                                                }      
                                      }
                              }
                             if(sliceData.length !== 0)
                             {
                                 columnsSlice.push(...sliceData)
                             }
                       })
                      if(columnsSlice.length !== 0)
                      {
                                hints.push(...columnsSlice)
                      }
                }
        })
           if(hints.length === 0)
           { 
                 if(stockColumnLength === 0)
                 {
                     hints.push({end:true})
                 }
                 else{
                     hints.push({stock:true})
                 }
                  
           }
           else
           {
                 if(stockColumnLength !== 0)
                 {
                    hints.push({stock:true})
                 }      
           }

        return hints
}

export default function checkWin(columns){
    


}

export function calculateScore (level,mode,addingType,oldScore,time){
    const levelIndex =  ["One Suit","Two Suits","Four Suits"].indexOf(level)
    const completedPoint = [50,100,150]
    const swicthCardPoint = [2,3,4]    
    const mergePoint = [1,2,3]
    const backPoint = [-1]
          if(mode === "completed")
          {
                if(addingType === "inc")
                {
                   return oldScore + completedPoint[levelIndex]
                }
                else{
                    return oldScore - completedPoint[levelIndex]
                }
          }
          else if(mode === "switch")
          {
            if(addingType === "inc")
                {
                    return oldScore + swicthCardPoint[levelIndex]
                }
                else{
                    return oldScore - swicthCardPoint[levelIndex]
                } 
          }
          else if(mode === "merge")
          {
            if(addingType === "inc")
                {
                    return oldScore + mergePoint[levelIndex]
                }
                else{
                    return oldScore - mergePoint[levelIndex]
                }
          }
          else if(mode === "back")
          {
            if(addingType === "inc")
                {
                    return oldScore + backPoint[0]
                }
                else{
                    return oldScore - backPoint[0]
                }
          }
         else if(mode === "end")
         {
            const modeSa = time % 3600
            const divideSa =Math.floor(time / 3600) *  4
            const modeDk = (modeSa % 60) *  1
            const divideDk = Math.floor(modeSa / 60) * 2
             return oldScore - divideSa - modeDk - divideDk
         }
          return 0
}