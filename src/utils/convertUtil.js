


export function timeFormatt(time){
    let sa = ""
    let dk = ""
    let sn = ""
    const modeSa = time % 3600
    const divideSa =Math.floor(time / 3600)
    sa = timeToString(divideSa)
    const modeDk = modeSa % 60
    const divideDk = Math.floor(modeSa / 60)
    dk = timeToString(divideDk)
    sn = timeToString(modeDk)
   
    return sa+":"+dk+":"+sn
}

function timeToString(value)
{
    let time = "" 

        if(value < 10)
        {
           return  time += "0"+value 
        }
           return time += ""+value
   
}