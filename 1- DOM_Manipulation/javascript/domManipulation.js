/**
 * Modifies the value of the DOM element with the id "output".
 */
function changeValueInDOM() {
    document.querySelector('#output_1').innerHTML = "Changed!!";
}

/**
 * Modifies the value of the DOM element with the id "output".
 */
function changeBackValueInDOM() {
    document.querySelector('#output_1').innerHTML = "Original Value";
}

/**
 * Reads in the value from the input element and then
 * modifies the other element.
 */
function readInValueAndChangeOutput() {
    var readInValue = document.querySelector('#input_2').value;
    document.querySelector('#output_2').innerHTML = readInValue;
}

/**
 * Can take in the color that the element is expected to change to.
 * Notice how we can pass in values from function calls, just the same
 * as functions in C#.
 */
function changeColorBox(a) {
    document.querySelector('#changes_with_css_box').style.color = a;
}

/**
 * Event handlers in javascript, rather than putting the event handler
 * from the HTML.
 */
window.onload = function () { //Don't worry so much about this... it just makes sure DOM is loaded before this. :) :)
    document.querySelector('#button_4').addEventListener('click', function () {
        var readInValue = document.querySelector('#input_4').value;
        document.querySelector('#output_4').innerHTML = readInValue;
    });
}