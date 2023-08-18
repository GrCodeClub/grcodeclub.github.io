const widthInput = document.getElementById("widthInput");
const textInput = document.getElementById("codeTextarea");

widthInput.addEventListener("input", function() {
    const width = widthInput.value + "px";
    image.style.width = width;
});


textInput.addEventListener("input", function() {
    const textWidth = textInput.value.length * 2 + "px"; // You can adjust the multiplier
    image.style.width = textWidth;
});

// Ορίστε το αρχικό πλάτος της προεπισκόπησης
image.style.width = "400" + "px";