const axios = require('axios')

async function makeRequest() {
  //   const config = {
  //     method: 'post',
  //     url: 'http://localhost:3001/shoping',
  //   }
  const params = {
    subject: 'test',
    Sname: 'test',
    price: '69',
    comment: 'test',
  }

  let res = await axios.post('http://localhost:3001/shoping', params)

  console.log(res)
}

makeRequest()
