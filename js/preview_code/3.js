const selectElement = document.getElementById("code3");
selectElement.addEventListener("change", function() {
    update_code(selectElement.value);
    selectElement1.value = "-";
});

const loadElement = document.getElementById("load3");

function update_code(selectedValue) {
    if (selectedValue=="-") loadElement.innerHTML = '';
    else {
        loadElement.innerHTML = `<pre data-src=${selectedValue} data-download-link></pre>`;
        Prism.highlightAll();
    }
}
