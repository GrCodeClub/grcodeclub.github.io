const selectElement3 = document.getElementById("code3");
selectElement3.addEventListener("change", function() {
    update_code(selectElement3.value);
});

const loadElement3 = document.getElementById("load3");

function update_code(selectedValue) {
    if (selectedValue=="-") loadElement3.innerHTML = '';
    else {
        loadElement3.innerHTML = `<pre data-src=${selectedValue} data-download-link></pre>`;
        Prism.highlightAll();
    }
}
