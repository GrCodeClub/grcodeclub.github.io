const selectElement = document.getElementById("code");
selectElement.addEventListener("change", function() {
    update_code(selectElement.value);
    selectElement1.value = "-";
});

const loadElement = document.getElementById("load");

function update_code(selectedValue) {
    if (selectedValue=="-") loadElement.innerHTML = '';
    else {
        loadElement.innerHTML = `<pre data-src=${selectedValue} data-download-link></pre>`;
        Prism.highlightAll();
    }
}



const selectElement3 = document.getElementById("code3");
selectElement3.addEventListener("change", function() {
    update_code3(selectElement3.value);
});

const loadElement3 = document.getElementById("load3");

function update_code3(selectedValue) {
    if (selectedValue=="-") loadElement3.innerHTML = '';
    else {
        loadElement.innerHTML = `<pre data-src=${selectedValue} data-download-link></pre>`;
        Prism.highlightAll();
    }
}
