(function(){
  window.addEventListener("load", function(){
    articles = new Articles();

    articles.requestTitle("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body", function (title) {
      assert.isEqual(title, "Alex Salmond speech – first minister hits back over Scottish independence", "request should return a title")
    })

  });
})();
