// CommonJS
const axios = require('axios');

// ES6 Modules
import axios from 'axios';
axios.get('https://api.example.com/data')
  .then(response => {
    // Handle the successful response here
    console.log('Data:', response.data);
  })
  .catch(error => {
    // Handle any errors here
    console.error('Error:', error);
  });
  axios.get('https://api.example.com/data', {
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json',
  },
  params: {
    'param1': 'value1',
    'param2': 'value2',
  },
})
.then(response => {
  // Handle the successful response here
  console.log('Data:', response.data);
})
.catch(error => {
  // Handle any errors here
  console.error('Error:', error);
});