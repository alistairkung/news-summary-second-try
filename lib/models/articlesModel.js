function Articles() {
  this.api = new Api
  this._articles = []
}

Articles.prototype.request = function (apiUrl, callback = function (){}) {
  var self = this;
  this.api.getJson(apiUrl, function(results){
    self._articles.push(results)
    callback();
  })
}

Articles.prototype.getArticles = function () {
  return this._articles
}
