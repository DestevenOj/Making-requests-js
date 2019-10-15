// Get DOM elements
const generateButton = document.getElementById('generate-button');
const postTitle = document.getElementById('post-title');
const postId = document.getElementById('post-id');
const postContent = document.getElementById('post-content');

// API URL
const api = 'https://us-central1-open-classrooms-js-for-the-web.cloudfunctions.net/widgets';

function makeRequest(verb, url, data) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open(verb, url);
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200 || request.status === 201) {
          resolve(JSON.parse(request.response));
        } else {
          reject(JSON.parse(request.response));
        }
      }
    };
    if (verb === 'POST') {
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(data));
    } else {
      request.send();
    }
  });
}

