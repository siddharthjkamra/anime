function loadBootstrap() {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js';
  script.integrity = 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM';
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);
}

// Call the function to load Bootstrap
loadBootstrap();

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("katana");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          elmnt.removeAttribute("katana");
          includeHTML();

          // Scroll to top after including content
          window.scrollTo(0, 0);
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

// Call includeHTML() to start including content when the document is ready
document.addEventListener("DOMContentLoaded", function() {
  includeHTML();

  // Dynamically load and execute search.js after including HTML
  import('./search.js')
    .then(module => {
      module.handleSearch();
    })
    .catch(error => {
      console.error('Error loading search.js:', error);
    });
});