"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Nadia Wasilevsky
   Date:   11/20/26

*/

/*Execute the function to run and display the coundown clock */
runClock();
setInterval("runClock()",1000);


/*Function to create and run the coundown clock */
function runClock() {


/*Display the time left until New Year's Eve */ 
document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";

/*Store the current date and time*/
var currentDay = new Date();

var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

/* Display the current date and time */
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

/* Calculate the days unitl January 1st */
var newYear = new Date("January 1,2021");
var nextYear = currentDay.getFullYear()+1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentDay)/(1000*60*60*24);

/*Calculate the hours left in the current day */
var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

/*Display the time left until New Year's Eve */
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = Math.floor(secsLeft);

}
