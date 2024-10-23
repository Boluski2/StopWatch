let timerEl = document.getElementById('timer');
let startButtonEl = document.getElementById('start');
let stopButtonEl = document.getElementById('stop');
let resetButtonEl = document.getElementById('Reset');

let startTime = 0
let elapsedTime = 0
let TimerInterval;



function startTimer(){
  startTime = Date.now() - elapsedTime

  TimerInterval = setInterval(()=>{
         elapsedTime = Date.now() - startTime
         timerEl.textContent = formatTime(elapsedTime);
  }, 10)
 
  startButtonEl.disabled = true
  stopButtonEl.disabled = false

}

function formatTime (elapsedTime){
     let milseconds = Math.floor((elapsedTime % 1000) / 10);

     let seconds = Math.floor((elapsedTime % (1000 * 60) / 1000));

     let minute = Math.floor((elapsedTime % (1000 * 60 * 60) / (1000 * 60)));

     let hours = Math.floor(elapsedTime  / (1000 * 60 * 60));

     

     return (
      (hours ? (hours > 9 ? hours : "0" + hours) : "00")
        + ":" +
      (minute ? (minute > 9 ? minute : "0" + minute) : "00")
        + ":" +
      (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")
        + "." +
      (milseconds > 9 ? milseconds : "0" + milseconds)
      )
}


function stopTimer(){
clearInterval(TimerInterval);

startButtonEl.disabled = false
stopButtonEl.disabled = true
}


function resetTimer(){
  clearInterval(TimerInterval);

  elapsedTime = 0
  timerEl.textContent = "00:00:00";

startButtonEl.disabled = false
stopButtonEl.disabled = true
}


startButtonEl.addEventListener("click", startTimer)
stopButtonEl.addEventListener("click", stopTimer)
resetButtonEl.addEventListener("click", resetTimer)