// ES5 object type
function hungHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
// make the code async with callback
hungHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);
  // capture this with self
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };
  this.http.send();
};

// Make an HTTP POST Request
hungHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  // set content type
  this.http.setRequestHeader("Content-type", "application/json");
  let self = this;
  this.http.onload = function () {
    // send the callback
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT Request (same with post)
hungHTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);
  // set content type for header
  this.http.setRequestHeader("Content-type", "application/json");
  let self = this;
  this.http.onload = function () {
    // send the callback
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE Request
hungHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);
  // capture this with self
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, "Post Deleted");
    } else {
      callback("Error: " + self.http.status);
    }
  };
  this.http.send();
};
