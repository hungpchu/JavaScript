document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR object
  const xhr = new XMLHttpRequest();
  // OPEN = specify
  // 1st argument = the type of request wanna make
  // 2nd argument = url and file we want to make it to
  // 3rd argument = true/false for async
  console.log("1st state", xhr.readyState);
  xhr.open("GET", "data.txt", true);
  console.log("READY state", xhr.readyState);

  // Optional - used for spinner
  xhr.onprogress = function () {
    console.log("Ready state", xhr.readyState);
  };

  xhr.onload = function () {
    // check the status = 200
    // this = xhr object
    console.log("READY state", xhr.readyState);
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  // check error
  xhr.onerror = function () {
    console.log("request error");
  };

  // no need to use this
  // xhr.onreadystatechange = function(){
  //     console.log('READY state', xhr.readyState);
  //     if (this.status === 200 && this.readyState === 4){
  //         console.log(this.responseText);
  //     }
  // }
  // send the request back to client
  xhr.send();

  /*
     readyState Values
     0: requesst not init
     1: server connection established
     2: request received
     3: processing request
     4: request finished and response is ready
     */
}
