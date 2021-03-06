import axios from 'axios'

const buuiltCalendarService = {
  async getList (feed, urlField) {
    const response = await axios.get(feed)
    let resultList = response.data.items.map((item) => {
      return {
        name: item[65],
        start: new Date(item[66] * 1000),
        end: (item[67] === null ? new Date(item[66] * 1000 + (60 * 60 * 1000)) : new Date(item[67] * 1000)),
        location: item[68],
        description: item[69],
        organizer: item[71],
        tags: item[73],
        state: item.state
      }
    })

    resultList = resultList.filter((item) => {
      if (item.state !== 'latest') return false

      const today = new Date()
      const yesterday = new Date(today)
      yesterday.setDate(yesterday.getDate() - 1)

      if (item.end) {
        return item.end >= yesterday
      } else {
        return item.start >= yesterday
      }
    })

    // sort ascending by start date
    resultList.sort((a, b) => a.start.getTime() - b.start.getTime())
    resultList = resultList.map((item) => {
      return {
        url: item[urlField],
        ...item
      }
    })
    return resultList
  }
}

export default buuiltCalendarService
