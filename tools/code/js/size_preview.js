const widthInput = document.getElementById("widthInput");

widthInput.addEventListener("input", function() {
    const width = widthInput.value + "px";
    image.style.width = width;
});

// Ορίστε το αρχικό πλάτος της προεπισκόπησης
image.style.width = widthInput.value + "px";
