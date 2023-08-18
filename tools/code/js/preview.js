const codeTextarea = document.getElementById("codeTextarea");
const preview = document.getElementById("preview");
const languageSelect = document.getElementById("languageSelect"); // Προσθέστε το ID του dropdown εδώ

function updatePreview() {
    document.getElementById("name").value = languageSelect.value;
    const selectedLanguage = languageSelect.value.toLowerCase();; // Χρησιμοποιήστε την επιλεγμένη επιλογή από το dropdown
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
