const output = document.getElementById("output")
const TimeBTN=document.getElementById("time")
const DateBTN=document.getElementById("Date")
const FullTimeBTN=document.getElementById("Fulltime")
const currentTime = new Date()
let mode = "time"
setInterval(()=>{
    output.textContent = format(mode)
}, 1000)
function format(formatMode){
    const now = new Date()
    switch(formatMode)
    {
        case "time": return now.toLocaleTimeString()
        case "Date" : return now.toLocaleDateString()
        case "Fulltime" :return now.toLocaleString()
    }
}
TimeBTN.onclick = function(){
    mode = "time"
}
DateBTN.onclick =function(){
      mode ="Date"
}
FullTimeBTN.onclick = function(){
    mode = "Fulltime"
}

