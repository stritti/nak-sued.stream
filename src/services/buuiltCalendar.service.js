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
        description: item[69],
        organizer: item[71],
        tags: item[73],
        state: item.state
      }
    })
    resultList = resultList.filter((item) => {
      return item.end > new Date() && item.state === 'latest'
    })

    // sort ascending by start date
    resultList.sort((a, b) => a.start.getTime() - b.start.getTime())

    return resultList
  }
}

export default buuiltCalendarService
