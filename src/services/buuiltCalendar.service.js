import axios from 'axios'

const buuiltCalendarService = {
  async getList (feed) {
    const response = await axios.get(feed)
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
