function Api() {

}

Api.prototype.getJson = function (apiUrl, callback) {
  var xhr = new XMLHttpRequest(),
    method = "GET",
    url = apiUrl;


  xhr.open(method, url, true);
  xhr.onload = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var results = JSON.parse(xhr.responseText);
      callback(results);
    }
  };
  xhr.send();

};
