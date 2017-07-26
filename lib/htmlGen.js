var htmlGen = {
  createHeader: function (target, args = {id: "main-header", innerHTML: "Summaries"}) {
    var createdHeader = document.createElement("h1");
    this._addAttributes(createdHeader, args);
    target.appendChild(createdHeader);
  },
  createList: function (target, args = {id: "ls"}) {
    var list = document.createElement("ul");
    this._addAttributes(list, args);
    document.body.appendChild(list);
  },
  createListItem: function (innerhtml, args = {href: "#"}) {
    var listItem = document.createElement("li");
    var anchor = document.createElement("a");
    anchor.innerHTML = innerhtml;
    this._addAttributes(anchor, args)
    listItem.appendChild(anchor)
    document.getElementById("ls").appendChild(listItem);
  },
  createDiv: function(target = document.body, args = {id: "div"}){
    var div = document.createElement("div");
    this._addAttributes(div, args);
    target.appendChild(div);
  },
  _addAttributes: function(item, args) {
    for (var property in args) {
      eval("item" + "." + property + " = " + "'" + args[property] + "'")
    }
  }
}
