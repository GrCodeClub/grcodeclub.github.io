// Προσθέστε ακροατές γεγονότων στα κουμπιά όλων των καρτών
var showCardButtons = document.querySelectorAll(".showCardButton");
var cardContents = document.querySelectorAll(".card-content");

for (var i = 0; i < showCardButtons.length; i++) {
  showCardButtons[i].addEventListener("click", function(event) {
    var cardContent = this.nextElementSibling;

    if (cardContent.style.maxHeight) {
      cardContent.style.maxHeight = null;
    } else {
      cardContent.style.maxHeight = cardContent.scrollHeight + "px";
    }
  });
}
