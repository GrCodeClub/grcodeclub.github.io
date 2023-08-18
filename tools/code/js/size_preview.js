const widthInput = document.getElementById("widthInput");
const textInput = document.getElementById("codeTextarea");

widthInput.addEventListener("input", function() {
    const width = widthInput.value + "px";
    image.style.width =  widthInput + "px";
});


textInput.addEventListener("input", function() {
    const textWidth = textInput.value.length * 2 + "px";
    if ( (textInput.value.length * 2 ) > 401){
        image.style.width = textWidth + "px";
    }
});

// Ορίστε το αρχικό πλάτος της προεπισκόπησης
image.style.width = widthInput + "px";
