function loadScriptsAsync(scripts) {
  scripts.forEach(function(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  });
}

loadScriptsAsync([
  'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
  'https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js',
  'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
]);

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
// GTranslate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'es,it,ja,zh-CN,id,vi',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  }