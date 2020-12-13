/**
 *  HungHTTP Library
 * @author Hung Chu
 * @license MIT
 **/

class HungHTTP {
  // Make an HTTP GET
  // Just need to call HungHTTP
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        // data as res.json()
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Make an HTTP Post Request
  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        // data as res.json()
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Make an HTTP Put Request
  static put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        // data as res.json()
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Make an HTTP Put Request
  static delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        // data as res.json()
        .then(() => resolve("Resource Deleted ..."))
        .catch((err) => reject(err));
    });
  }
}
