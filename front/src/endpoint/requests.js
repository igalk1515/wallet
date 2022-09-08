import axios from 'axios'

const url = 'http://localhost:3001/shoping'
const post = async (params) => {
  let res = await axios.post(url, params)
  return res
}

const get = async () => {
  let res = await axios.get(url)
  if (res.status === 200) {
    return res.data
  } else {
    return 'error'
  }
}

export default { post, get }
