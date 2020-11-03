'use strict';

const { CloudEvent, HTTP } = require('cloudevents');
const axios = require('axios').default;

const ce = new CloudEvent({
  type: 'com.lholmquist.cloudeventy.fun',
  source: 'fun-with-cloud-events',
  data: {
    key: 'DATA'
  }
});

// console.log(ce.toJSON());


const ce2 = ce.cloneWith({extension1: 'Value'});


// console.log(ce2.toJSON());

const message = HTTP.binary(ce);

// console.log(message);

axios({
  method: 'post',
  url: 'http://localhost:3000/cloudeventy',
  data: message.body,
  headers: message.headers
}).then((response) => {
  console.log(response.data);
});
