## Module_2: Assignment

For this assignment, you're going to fork this repository to your own Github account and clone that repository locally. Inside the repo you'll find a file in app/js called enhancedDate.js.

1. Using the module pattern, you're going to write an "enhanced" date module, based on using the built-in Date object. 
2. The api for this module will consist of the following methods:
  * __setDate__: Stores the passed-in date. This function can take milliseconds after epoch or a Date object. Do some type-checking to make sure you have a valid type. If no value is passed, default your internally stored date to now.
  * __getDate__: Returns either milliseconds after epoch by default or a Date object if true is passed as an argument.
  * __getDayName__: Returns the full day name as a string, e.g. "Monday", "Tuesday", etc.
  * __getMonthName__: Return the full month name as a string, e.g. "January", "February", etc.
  * __isFuture__: Return boolean true if date is in the future (from when method is called)
  * __isToday__: Return boolean true if the stored date is "today".
3. You module should return an object with each of these methods defined on it. You'll need to use the built-in Date constructor to implement some of these methods. 
4. The module should have a notion of "private" data, that is data that is used only internally by the module and is not exposed as part of the public API.
5. The module should handle the case when an API method (other than setDate) is called before a date has been set. One approach to this is to check if a date has already been set, and if not, set a new date at that time. Only the setDate method should be able to change the internally stored date after it has been set once.
6. You may wish to test your enhancedDate module by writing code that calls methods on the enhancedDate object it creates. For example:

`var message = '';
enhancedDate.setDate(new Date());
message += 'Today is ' + enhancedDate.getDayName() + ' in the month of ' + enhancedDate.getMonthName;
console.log(message);`



This assignment is due by Thursday, April 16th by 7pm. Once grading has been completed, a :+1: comment will be added to the pull request and the pull request will be closed.