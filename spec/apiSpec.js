(function(){
  window.addEventListener("load", function(){
    api = new Api();

    api.getJson( "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body", function (results) {
      assert.isEqual(results.response.content.webTitle, "Alex Salmond speech – first minister hits back over Scottish independence", "Ajax request can be sent to retrieve json");
    });
  });
})();
