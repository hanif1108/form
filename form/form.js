document.addEventListener("DOMContentLoaded", function () {
  const countrySelect = document.getElementById("university");
  const legalComplianceContainer = document.getElementById(
    "legalComplianceContainer"
  );
  function toggleLegalCompliance() {
    if (countrySelect.value === "United States") {
      legalComplianceContainer.style.display = "block";
    } else {
      legalComplianceContainer.style.display = "none";
    }
  }
  countrySelect.addEventListener("change", toggleLegalCompliance);
  toggleLegalCompliance();
});

let url = "";

let form = document.querySelector("#myForm");
form.addEventListener("submit", function (e) {
  let fData = new FormData(form);
  fetch(url, {
    method: "POST",
    body: fData,
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      console.log(text);
      form.reset();
    });
  e.preventDefault();
});
