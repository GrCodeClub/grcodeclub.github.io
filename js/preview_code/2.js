const selectElement2 = document.getElementById("code2");
selectElement2.addEventListener("change", function() {
    update_code3(selectElement3.value);
});

const loadElement2 = document.getElementById("load2");

function update_code2(selectedValue) {
    if (selectedValue=="-") loadElement2.innerHTML = '';
    else {
        loadElement2.innerHTML = `<pre data-src=${selectedValue} data-download-link></pre>`;
        Prism.highlightAll();
    }
}
