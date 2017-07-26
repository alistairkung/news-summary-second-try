function Controller() {
  this.model = new Articles
  this.view = new NewsSummaryViews
  this.showTitle("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body");
}

Controller.prototype.showTitle = function (apiUrl) {
  this.model.requestTitle(apiUrl, function (title) {
    htmlGen.createListItem(title)
  })
}
