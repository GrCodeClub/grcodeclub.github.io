const selectElement = document.getElementById("code1");
selectElement.addEventListener("change", function() {
    update_code(selectElement.value);
    selectElement1.value = "-";
});

const loadElement = document.getElementById("load1");

function update_code(selectedValue) {
    if (selectedValue=="-") loadElement.innerHTML = '';
    else {
        loadElement.innerHTML = `<pre data-src=${selectedValue} data-download-link></pre>`;
        Prism.highlightAll();
    }
}
