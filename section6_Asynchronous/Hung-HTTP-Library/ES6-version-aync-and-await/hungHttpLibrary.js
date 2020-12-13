/**
 *  HungHTTP Library
 * @author Hung Chu
 * @license MIT
 **/

class HungHTTP {
  // Make an HTTP GET
  // Just need to call HungHTTP
  static async get(url) {
    const response = await fetch(url);
    const data = response.json();
    // data below will be call within
    // .then(data => console.log(data))
    return data;
  }

  // Make an HTTP Post Request
  static async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // data as res.json()
    const resData = response.json();
    return resData;
  }

  // Make an HTTP Put Request
  static async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // data as res.json()
    const resData = response.json();
    return resData;
  }

  // Make an HTTP Put Request
  static async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    // data as res.json()
    return await "Resource Deleted...";
  }
}
