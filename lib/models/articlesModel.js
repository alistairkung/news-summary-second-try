function Articles() {
  this.api = new Api
}

Articles.prototype.requestTitle = function (apiUrl, callback = function (){}) {
  var self = this;
  this.api.getJson(apiUrl, function(results){
    var title = results.response.content.webTitle
    callback(title);
  })
}
