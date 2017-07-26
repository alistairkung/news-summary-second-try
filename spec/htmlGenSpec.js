// Displaying Headers
// ------------------
htmlGen.createHeader(document.body);

assert.isEqual(document.getElementById("main-header").innerHTML, "Summaries",
               "Header is visible on page")

// Displaying list item
// ----------------
// list = [];
// title1 = "title1";
// title2 = "title2";
// 
// list.push(title1);
// list.push(title2);
//
// htmlGen.createList(document.body);
//
// list.forEach(function(element) {
//   htmlGen.createListItem(element);
// });
//
// var title = document.getElementsByTagName("li")[1].innerHTML;
// console.log(title)
// assert.isEqual(title.innerHTML, "title2", "listed item displays the title");
