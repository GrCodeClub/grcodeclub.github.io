// Όταν πατηθεί το κουμπί, εμφανίστε το αναδυόμενο κείμενο
document.getElementById("showDropdownButton").addEventListener("click", function() {
  var dropdownContent = document.getElementById("dropdownContent");
  if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
});
