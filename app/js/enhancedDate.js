/* 
 * add your module definition for enhancedDate here
 * assign the module to a global variable
 */

var enhancedDate = (function () {
    "use strict";

    // Private data
    var publicAPI = {};
    var myDate = 0.0;         // Store in milliseconds after epoch, default to the beginning
    var weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Private Functions


    //
    // getDate: Returns either milliseconds after epoch by default or
    // a Date object if true is passed as an argument.
    //
    function getDate(bRtnMill) {
             if (bRtnMill) {
                return myDate;
            } else {
                return new Date(myDate);
            }
    }

    //
    // setDate: Stores the passed-in date. This function can take milliseconds
    // after epoch or a Date object. Do some type-checking to make sure you
    // have a valid type. If no value is passed, default your internally
    // stored date to now.
    //
    function setDate(newDate) {
        if (newDate) {
            if (newDate instanceof Date) {
                myDate = newDate.getTime();
            } else if (typeof newDate === "number") {
                myDate = newDate;
            } else {
                myDate = new Date().getTime();
            }
        }


    }

    //
    // getDayName: Returns the full day name as a string,
    // e.g. "Monday", "Tuesday", etc.
    //
    function getDayName() {
        return weekdayNames[new Date(getDate(true)).getDay()];
    }

    //
    // getMonthName: Return the full month name as a string,
    // e.g. "January", "February", etc.
    //
    function getMonthName() {
        return monthNames[new Date(getDate(true)).getMonth()];
    }

    //
    // isFuture: Return boolean true if date is in the future (from when method is called)
    //
    function isFuture() {
        return myDate > Date.now.getMilliseconds();
    }

    //
    // isToday: Return boolean true if the stored date is "today".
    //
    function isToday() {
        var todayDate = new Date();
        var curDate = new Date(getDate());

        return (todayDate.getDate() === curDate.getDate() &&
                todayDate.getMonth() === curDate.getMonth() &&
                todayDate.getYear() === curDate.getYear());
    }

    publicAPI = {
        getDate : getDate,
        setDate : setDate,
        getDayName : getDayName,
        getMonthName : getMonthName,
        isFuture : isFuture,
        isToday : isToday
    };

    return publicAPI;
})();

var message = '';

enhancedDate.setDate(new Date());
console.log(enhancedDate.getDate());
console.log(new Date());

message += 'Today is ' + enhancedDate.getDayName() + ' in the month of ' + enhancedDate.getMonthName();

console.log(message);

