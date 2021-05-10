const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const hasil = data.map(data_1 => data_1.name)
    console.log(hasil)
  })
  .catch(err=>{
    console.log('err')
  })