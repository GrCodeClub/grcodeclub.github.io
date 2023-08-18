const widthInput = document.getElementById("widthInput");
const textInput = document.getElementById("codeTextarea");

widthInput.addEventListener("input", function() {
    const width = widthInput.value + "px";
    image.style.width =  widthInput + "px";
});

// Ορίστε το αρχικό πλάτος της προεπισκόπησης
image.style.width = widthInput + "px";
