(function(){
  window.addEventListener("load", function(){
    articles = new Articles();

    articles.request("http://clickbait-generator.herokuapp.com/api", function () {
      assert.isEqual(articles.getArticles().length, 1, "request should populate articles with an object")
    })

  });
})();
