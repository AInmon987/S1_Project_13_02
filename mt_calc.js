"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   Author: 
   Date:   
   
   Filename: mt_calc.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers
      
   buttonClick(e)
      Adds functions to the buttons clicked within the calcutlor
      
   calcKeys(e)
      Adds functions to key pressed within the calculator window 
      
   eraseChar(textStr)
      Erases the last character from the text string, textStr
      
   evalEq(textStr, decimals) 
      Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter

   lastEq(textStr) 
      Returns the previous expression from the list of expressions in the textStr parameter

*/
//Run the init function when the page is fully loaded.
window.onload = init;
//Sets up the event handlers for the page. 
function init() {
      var calcButton = document.getElementsByClassName("calcButton");
      //looping through the event objects and applying the click event to the objects.
      for (var i = 0; i < calcButton.length; i++) {
            calcButton[i].onclick = buttonClick;
      }
      //running the calckeys function on the key down event and has the id of calcWindows. 
      document.getElementById("calcWindow").onkeydown = calcKeys;
}
//the purpose of the function is to change what appears in the cal window when the user clicks the buttons.
function buttonClick(e) {
      //Getting the value from the textarea box with the id of calcWindow. 
      var calcValue = document.getElementById("calcWindow").value;
      //Getting the value from the textarea box with the id of decimals. 
      var calcDecimal = document.getElementById("decimals").value;
      //defines each button on the calculator. 
      var buttonValue = e.target.value;

      switch (buttonValue) {
            //this case will delete the contents on the page. 
            case "del":
                  calcValue = "";
                  break;
                  //Will delete the last object to be entered in the calculator.
            case "bksp":
                  calcValue = eraseChar(calcValue);
                  break;
                  //Will solve the situation that is being applied to the calculator. 
            case "enter":
                  calcValue += " = " + evalEq(calcValue, calcDecimal) + "\n";
                  break;
                  //Copies the last equation that was pluged into the calculator.
            case "prev":
                  calcValue = lastEq(calcValue);
                  break;
            default:
                  calcValue += buttonValue;
                  break;
      }
      //Putting the text on the window of the calculator.
      document.getElementById("calcWindow").value = calcValue;
      //put the cursor focus with in the calculator window.
      document.getElementById("calcWindow").focus();
}

function calcKeys(e) {
      //Getting the value from the textarea box with the id of calcWindow. 
      var calcValue = document.getElementById("calcWindow").value;
      //Getting the value from the textarea box with the id of decimals. 
      var calcDecimal = document.getElementById("decimals").value;

      switch (e.key) {
            //The case is for the keys objects and this will delete the values. 
            case "Delete":
                  calcValue = "";
                  break;
                  //This event key will solve or put the situation togther (add).
            case "Enter":
                  calcValue += " = " + evalEq(calcValue, calcDecimal);
                  break;
                  //bring up the last equation that was used. 
            case "ArrowUp":
                  calcValue = lastEq(calcWindow.value);
                  break;
                  //keeps the browser from preforming the defualt action in response to the user pressing the up-arrow key.
      }
      //Putting the text on the window of the calculator.
      document.getElementById("calcWindow").value = calcValue;
}




/* ===================================================================== */

function eraseChar(textStr) {
      return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
      var lines = textStr.split(/\r?\n/);
      var lastLine = lines[lines.length - 1];
      var eqValue = eval(lastLine);
      return eqValue.toFixed(decimals);
}

function lastEq(textStr) {
      var lines = textStr.split(/\r?\n/);
      var lastExp = lines[lines.length - 2];
      return lastExp.substr(0, lastExp.indexOf("=")).trim();
}