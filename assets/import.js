function loadBootstrap() {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js';
  script.integrity = 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM';
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);
}

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

          window.scrollTo(0, 0);
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  includeHTML();

  import('./search.js')
    .then(module => {
      module.handleSearch();
    })
    .catch(error => {
      console.error('Error loading search.js:', error);
    });
});