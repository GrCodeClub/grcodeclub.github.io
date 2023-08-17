const widthInput = document.getElementById("widthInput");

widthInput.addEventListener("input", function() {
    const width = widthInput.value + "px";
    preview.style.width = width;
});

// Ορίστε το αρχικό πλάτος της προεπισκόπησης
preview.style.width = widthInput.value + "px";
preview.style.width = widthInput.value + "px";