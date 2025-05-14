function calculatePrice() {
  let siteType = document.getElementById("siteType").value;
  let pages = parseInt(document.getElementById("pages").value);
  let customYes = document.getElementById("designYes").checked;
  let customDesign = customYes ? "Yes" : "No";

  if (siteType === "" || isNaN(pages)) {
    alert("Please select a site type and number of pages.");
    return;
  }

  let price = 0;
  if (siteType === "Business Site") {
    price = 1000;
  } else if (siteType === "Online Store") {
    price = 2000;
  } else if (siteType === "Blog") {
    price = 1500;
  }

  if (pages > 1) {
    price += (pages - 1) * 200;
  }

  if (customYes) {
    price += 1000;
  }

  let summary = document.getElementById("result-summary");
  summary.innerHTML =
    "<h2>Project Quote Summary</h2>" +
    "<p><i class='fa fa-globe'></i> Site Type: " + siteType + "</p>" +
    "<p><i class='fa fa-file'></i> Pages: " + pages + "</p>" +
    "<p><i class='fa fa-paint-brush'></i> Custom Design: " + customDesign + "</p>" +
    "<p><i class='fa fa-sack-dollar'></i> Total Price: ₪" + price + "</p>";
}

function resetForm() {
  document.getElementById("siteType").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("designYes").checked = false;
  document.getElementById("designNo").checked = false;
  document.getElementById("result-summary").innerHTML = "";
}
