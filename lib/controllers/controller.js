function Controller() {
  this.api = new Api
  this._articles = []
}

Controller.prototype.request = function (apiUrl) {
  var self = this;
  this.api.getJson(apiUrl, function(results){
    self._articles.push(results)
  })
}
