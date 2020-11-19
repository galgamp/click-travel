import axios from 'axios'

export default {
  fetchTicketsFromDestination(code) {
    return axios
      .get(`${process.env.apiUrl}/tickets`, {
        params: {
          filter: {
            where: {
              to: code,
            },
          },
        },
      })
      .then((response) => {
        console.log(response)
        return response.data
      })
  },
}
