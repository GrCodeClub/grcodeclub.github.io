const codeTextarea = document.getElementById("codeTextarea");
const preview = document.getElementById("preview");
const languageSelect = document.getElementById("languageSelect"); // Προσθέστε το ID του dropdown εδώ




function updatePreview() {
    const selectedLanguage = languageSelect.value;

    if (selectedLanguage == "java") document.getElementById("name").value = "Αρχείο.java";
    if (selectedLanguage == "c") document.getElementById("name").value = "Αρχείο.c";
    if (selectedLanguage == "python") document.getElementById("name").value = "Αρχείο.py";
    if (selectedLanguage == "javascript") document.getElementById("name").value = "Αρχείο.js";
    if (selectedLanguage == "html") document.getElementById("name").value = "Αρχείο.html";

    const language = Prism.languages[selectedLanguage];
    preview.innerHTML = '<pre>' + Prism.highlight(codeTextarea.value, language) + '</pre> <br>';
}

codeTextarea.addEventListener("input", updatePreview);
languageSelect.addEventListener("change", updatePreview); // Χρησιμοποιήστε το "change" event για το dropdown

updatePreview();

// Συνάρτηση που δημιουργεί την εικόνα από την προεπισκόπηση και την αποθηκεύει
document.getElementById("generateImage").addEventListener("click", function() {
    html2canvas(image).then(function(canvas) {
        canvas.toBlob(function(blob) {
            saveAs(blob, "grcodeclub.png");
        });
    });
});

const bgColorInput = document.getElementById("bgColor");
const bg_preview = document.getElementById("bg_preview");
bgColorInput.addEventListener("input", function() {
    const bgColor = bgColorInput.value;
    bg_preview.style.backgroundColor = bgColor;
});
