const selectElement = document.getElementById("code");                
function update_code() {
    const selectedValue = selectElement.value;
    if (selectedValue=="-") loadElement.innerHTML = '';
    else {
        loadElement.innerHTML = `<pre data-src=${selectedValue} data-download-link></pre>`;
        Prism.highlightAll();
    }
}

selectElement.addEventListener("change", update_code);
update_code();