// Function to load the header and footer content from separate files
function loadHeaderAndFooter() {
  // Load the header.html content
  fetch("header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("header").innerHTML = html;
    });

  // Load the footer.html content
  fetch("footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer").innerHTML = html;
    });
}

// Call the function to load header and footer when the page is fully loaded
window.addEventListener("load", loadHeaderAndFooter);
