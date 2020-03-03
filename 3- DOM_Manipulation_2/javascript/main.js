window.onload = function () {

    /**
     * Modify this function in this event listener.
     * What is wrong here? Fix the bug :)
     */
    document.querySelector('#sampleButton').addEventListener('click', function () {
        var readInValue = document.querySelector('#output').value;
        console.log(readInValue);
        var convertedValue = parseInt(readInValue) + 1
        console.log(typeof readInValue);
        document.querySelector('#output').innerHTML = parseInt(readInValue) + 1;
    });
}