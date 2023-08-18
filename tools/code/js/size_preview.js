const widthInput = document.getElementById("widthInput");
const textInput = document.getElementById("codeTextarea");

widthInput.addEventListener("input", function() {
    const width = widthInput.value + "px";
    image.style.width = width;
    image.style.height = width + "px";
});


// Ορίστε το αρχικό πλάτος της προεπισκόπησης
image.style.width = "480" + "px";
image.style.height = "480" + "px";
