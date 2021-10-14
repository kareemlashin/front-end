fetch('server', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    credentials: 'same-origin', // include, same-origin, *omit
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(data) // must match 'Content-Type' header
})
    .then(response => {
        // reject on network failure or if anything prevented the request from completing.
        // won’t reject on HTTP error status even if the response is an HTTP 404 or 500,
        // it will resolve normally (with ok status set to false)
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        }


        return Promise.reject(new Error(response.statusText));
    })
    .then(response => response.json()) // parses response to JSON
    .then(result => {
        // custom error
    })
    .catch(error => {
        // common error
        return null;
    });
    
fetch('server')
    .then(response => {
        // network failure, request prevented
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        }


        return Promise.reject(new Error(response.statusText));
    })
    .then(response => response.json())
    .then(result => {
        // custom error
    })
    .catch(error => {
        // common error
        return null;
    });
fetch('url')
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(data => {
    console.debug(data);
  }).catch(error => {
    console.error(error);
  });
  