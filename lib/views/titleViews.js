function NewsSummaryViews() {
 this.addHeader();
 this.addList();
}

NewsSummaryViews.prototype.addHeader = function() {
  htmlGen.createHeader(document.body);
};

NewsSummaryViews.prototype.addList = function () {
  htmlGen.createList(document.body);
};

NewsSummaryViews.prototype.displayTitle = function (title) {
  htmlGen.createListItem(title)
};
