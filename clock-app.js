

window.onload = function() {
   // get the elements needed:
   var sec     = document.getElementById('sec');
   var min     = document.getElementById('min');
   var hour    = document.getElementById('hour');
   // declare some variables, we constantly use:
   var tmpRotValue  = "";
   var curDate, curSec, curMin, curHour, secRot, minRot, hourRot;

   /*
    * function setRotation(elem, degree)
    * Set the current rotation of an element to the value of degree
    */
   function setRotation(elem, degrees) {
      tmpRotValue = "rotate(" + degrees + "deg)";
      elem.setAttribute(
         "style",
         "-webkit-transform:"+tmpRotValue+"; -moz-transform:"+tmpRotValue+"; -ms-transform:"+tmpRotValue+"; -o-transform:"+tmpRotValue+"; transform:"+tmpRotValue+";" 
      );
   }
   /*
    * function tick();
    * Gets the current time, calculates all the required values and
    * triggers the setRotation function for each element
    */
   function tick() {
      // get the current date and time:
      curDate = new Date();
      // extract the values for sec, min and hour:
      curSec   = curDate.getSeconds();
      curMin   = curDate.getMinutes();
      curHour  = curDate.getHours();
      // make sure, the hour is in the range of [0..11] and not in [12..23]
      if ( curHour > 11 ) {
         curHour -= 12;
      }
      // calculate the rotations per hand:
      secRot   = curSec * 6;              // 360Â°/60sec   = 6Â° per second
      minRot   = curMin * 6;              // 360Â°/60min   = 6Â° per minute
      hourRot  = curHour * 30 + curMin/2; // 360Â°/12hours = 30Â° per hour
      // apply rotations:
      setRotation(sec,  secRot);
      setRotation(min,  minRot);
      setRotation(hour, hourRot);
   }
   // on time call on launch:
   tick();
   // set interval to 1 sec
   setInterval(function(){tick()}, 1000);
};
