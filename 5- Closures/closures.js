//CLOSURE #1 WITH DEFECT.
function outerFunction(firstFunctionArgument) {
    var extraText = " adding extra text!";

    return function (secondFunctionArgument) {
        var secondArgWithHappyFace = " :) " - secondFunctionArgument;
        console.log((firstFunctionArgument + secondArgWithHappyFace) + extraText);
    }
}

var returnOfOuterFunction = outerFunction("first function argument");
console.log(returnOfOuterFunction);
var guessWhatThisIs = returnOfOuterFunction("second function argument");
console.log(guessWhatThisIs);


//SOLVED CLOSURE #1.

function outerFunction(firstFunctionArgument) {
    var extraText = " adding extra text!";

    return function (secondFunctionArgument) {
        var secondArgWithHappyFace = " :) " + secondFunctionArgument;
        console.log((firstFunctionArgument + secondArgWithHappyFace) + extraText);
    }
}

var result = outerFunction("first function argument")("second function argument");
console.log(result);

var returnOfOuterFunction = outerFunction("first function argument");
console.log(returnOfOuterFunction);
var guessWhatThisIs = returnOfOuterFunction("second function argument");
console.log(guessWhatThisIs);
guessWhatThisIs = returnOfOuterFunction("what baout this?");
console.log(guessWhatThisIs);
guessWhatThisIs = returnOfOuterFunction("or this?");
console.log(guessWhatThisIs);
guessWhatThisIs = returnOfOuterFunction("maybe this?");
console.log(guessWhatThisIs);
guessWhatThisIs = returnOfOuterFunction("well now!?");
console.log(guessWhatThisIs);
