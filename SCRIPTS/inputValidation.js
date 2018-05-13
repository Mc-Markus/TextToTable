
function validateInput() {
    var cellSeparator = document.getElementById("cellSeparator").value;
    var rowSeparator = document.getElementById("rowSeparator").value;
    var amountOfColumns = document.getElementById("amountOfColumns").value;
    var inputText = document.getElementById("inputText").value;

    //if not everything is filled it does not need to show an error but form should not be able to be submitted
    if (cellSeparator.length === 0 || rowSeparator.length === 0 || inputText.length === 0) return;

    //if the text is to short show the text is to short
    if (document.getElementById("inputText").value.length < (amountOfColumns * 2)) {
        document.getElementById("inputText").setCustomValidity("Text is not long enough.\n " +
            "It should be at least " + amountOfColumns * 2 + " characters long");

        return;
    }
    else {
        document.getElementById("inputText").setCustomValidity("");
    }

    //if the cell separator does not appear often enough throw message
    if (countChar(document.getElementById("inputText").value, cellSeparator) < (amountOfColumns * 2 - 2)) {
        document.getElementById("cellSeparator").setCustomValidity("Cell separator does not appear enough times in the text.\n " +
            "It should at least appear " + (amountOfColumns * 2 - 2) + " times");
        return;
    }
    else {
        document.getElementById("cellSeparator").setCustomValidity("");
    }

    //if the row separator does not appear often enough throw message
    if (countChar(document.getElementById("inputText").value, rowSeparator) < 2) {
        document.getElementById("rowSeparator").setCustomValidity("Row separator does not appear at least 2 times in the text");
    }
    else {
        document.getElementById("rowSeparator").setCustomValidity("");
    }
}

//counts how often a specific char appears in a text
function countChar(text, char) {
    console.log(text + char);

    var re = new RegExp(char, "g");
    if(text.match(re) == null){
        return 0;
    }
    return text.match(re).length;
}