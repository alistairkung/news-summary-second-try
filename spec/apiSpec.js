(function(){
  window.addEventListener("load", function(){
    controller = new Controller();

    controller.api.get( "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body", controller.saveArticles());

    assert.isEqual(controller._articles.last, "Alex Salmond speech – first minister hits back over Scottish independence", "Can make get request to API and store parsed json in a variable")
  });
})();
