//Global variables

const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

//--------------------------------------------------------------------------// 

let seconds = 0;
let interval = null;

 //-------------------------------------------------------------------------//

//adding eventListener

//1. To enable start button on clicking
start_btn.addEventListener('click', start);

//-------------------------------------------------------------------------//

//2. To enable stop button on clicking
stop_btn.addEventListener('click', stop);

//-------------------------------------------------------------------------// 

//3. To enable reset button on clicking
reset_btn.addEventListener('click', reset);

//-------------------------------------------------------------------------//
 

//adding function to get time
function timer () {

    seconds++;

    //to update the time
//-------------------------------------------------------------------------//

    //1. To get the minutes
    let mins = Math.floor((seconds)/60);

     //2. To ge seconds
    let secs = seconds % 60;

 

     //condition to get time if no. is less than 10 (makes it 01/02/03.....)

     //1.condition for seconds
    if (secs < 10){

        secs = "0" + secs;

    }

    //2.condition for minutes
    if (mins < 10) {

        mins = "0" + mins;

    }

   //-------------------------------------------------------------------------//

    
   // to display minutes:seconds
    time_el.innerText = `${mins}:${secs}`;

}

//-------------------------------------------------------------------------// 

// to enable timer to start or start time counting
function start ()  {

 if (interval) {

    return

 }

 interval = setInterval(timer, 1000);

}

//-------------------------------------------------------------------------// 

//to stop the timer or stop time counting
function stop () {

    clearInterval(interval);

    interval = null;

}

 //-------------------------------------------------------------------------//

//to reset the counter to 00:00
function reset () {

    stop();

    seconds = 0;

    //for minutes:seconds

    time_el.innerText = "00:00";

}

//-------------------------------------------------------------------------// 