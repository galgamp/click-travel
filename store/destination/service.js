import axios from 'axios'

export default {
  fetchAllDestinations() {
    return axios.get(`${process.env.apiUrl}/destinations`).then((response) => {
      console.log(response)
      return response.data
    })
  },
}
