(function() {

  var pres = document.getElementsByTagName('pre');

  if ( !pres.length || document.body.querySelectorAll('*').length !== 1 ) {
    return;
  }

  chrome.extension.sendRequest({method: "getStyle"}, function(response) {
    
    var style = document.createElement("style");
    style.type = "text/css";
    style.textContent = response;
    document.head.appendChild(style);

    // get file extension
    var ext = window.location.href.split('/').pop().match(/\.(js|css)/i).slice(1);
    pres[0].className = "prettyprint lang-" + ext;
    prettyPrint();
  });

})();