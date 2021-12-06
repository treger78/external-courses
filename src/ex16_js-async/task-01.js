function fetchPolyfill(url, options) {
  const request = new XMLHttpRequest();

  request.open(options.method, url);

  request.onload = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
    }
  };

  request.onerror = () => {
    console.log('Error');
  };

  if (options.method.toLowerCase() === 'get') {
    request.send();
  } else if (options.method.toLowerCase() === 'post') {
    request.send(options.body);
  }
}

// https://pipedream.com
const postURL = 'https://enub4cj95xhklod.m.pipedream.net';

const body = {
  url: 'https://learn.webpurple.net/',
};

const postOptions = {
  method: 'POST',
  body: JSON.stringify(body),
};

fetchPolyfill(postURL, postOptions);

const getUrl = 'https://api.chucknorris.io/jokes/random';

const getOptions = {
  method: 'GET',
};

fetchPolyfill(getUrl, getOptions);
