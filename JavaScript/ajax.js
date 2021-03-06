const Ajax = {
  get: function(url, fn) {
    const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Mscrosoft.XMLHttp');
    xhr.open('GET', url, false);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 304) {
          console.log(xhr.responseText);
          fn.call(xhr.responseText);
        }
      }
    }
    xhr.send();
  },
  post: function(url, data, fn) {
    const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Mscrosoft.XMLHttp');
    xhr.open('POST', url, false);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 304) {
          fn.call(xhr.responseText);
        }
      }
    }
    xhr.send(data);
  }
}


const getJSON = function(url) {
  return new Promise((resolve, reject) => {
    // 兼容IE低版本
    const xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Mscrosoft.XMLHttp');
    // 第三个参数为false，表示异步操作
    xhr.open('GET', url, false);
    xhr.setRequestHeader('Accept', 'application/json');
    // 监听readyState
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText));
      }
    }
    xhr.send();
  })
}
