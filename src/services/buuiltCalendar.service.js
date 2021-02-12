import axios from 'axios'

const buuiltCalendarService = {
  async getList (feed) {
    // const response = await axios.get('https://www.nak-tuttlingen.de/api/tree/32/C30834B8-6C89-11EB-B7A1-47F70101BD0E/export')
    // const response = await axios.get('https://www.nak-tuttlingen.de/api/tree/33/C057DC10-6D1E-11EB-A445-47010201BD0E/export')
    console.log('Feed', feed)
    const response = await axios.get(feed)
    console.log(response)
    let resultList = response.data.items.map((item) => {
      return {
        name: item[65],
        start: new Date(item[66] * 1000),
        end: new Date(item[67] * 1000),
        location: item[68],
        state: item.state
      }
    })
    resultList = resultList.filter((item) => {
      return item.end > new Date() && item.state === 'latest'
    })
    return resultList
  }
}

export default buuiltCalendarService
