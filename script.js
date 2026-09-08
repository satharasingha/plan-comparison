const toggle = document.getElementById("differencesOnly");
const rows = [...document.querySelectorAll("#planTable tbody tr")];
const status = document.getElementById("comparisonStatus");

function updateComparison() {
  const onlyDifferences = toggle.checked;
  rows.forEach(row => {
    row.hidden = onlyDifferences && row.dataset.values !== "different";
  });

  status.textContent = onlyDifferences
    ? "Showing only features that differ between plans."
    : "Showing all plan features.";
}

toggle.addEventListener("change", updateComparison);
