var vendorClinicCheckbox = document.getElementById("vendorClinicCheckbox");
var clinicIdBox = document.getElementById("clinicIdBox");
var clinicNameBox = document.getElementById("clinicNameBox");
var clinicTable = document.getElementById("clinicTable");

var outsideLabCheckbox = document.getElementById("outsideLabCheckbox");
var outsideLabBox = document.getElementById("outsideLabBox");
var ousideLabIdBox = document.getElementById("ousideLabIdBox");

clinicIdBox.style.display = "none";
clinicNameBox.style.display = "none";
clinicTable.style.display = "none";

outsideLabBox.style.display = "none";
ousideLabIdBox.style.display = "none";

vendorClinicCheckbox.addEventListener("click", vendorHidden);
function vendorHidden() {
  if (vendorClinicCheckbox.checked == true) {
    clinicIdBox.style.display = "block";
    clinicNameBox.style.display = "block";
    clinicTable.style.display = "block";
  } else {
    clinicIdBox.style.display = "none";
    clinicNameBox.style.display = "none";
    clinicTable.style.display = "none";
  }
}

outsideLabCheckbox.addEventListener("click", outsideHidden);
function outsideHidden() {
  if (outsideLabCheckbox.checked == true) {
    outsideLabBox.style.display = "block";
    ousideLabIdBox.style.display = "block";
  } else {
    outsideLabBox.style.display = "none";
    ousideLabIdBox.style.display = "none";
  }
}
