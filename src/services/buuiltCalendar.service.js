import axios from 'axios'

const buuiltCalendarService = {
  async getList (feed, urlField, filter) {
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

    resultList = resultList.map((item) => {
      return {
        url: item[urlField],
        ...item
      }
    })

    resultList = resultList.filter((item) => {
      // only published events
      if (item.state !== 'latest') return false
      // ony events with url
      if (item.url === null || item.url === '') return false

      // only events in future
      const today = new Date()
      today.setHours(0)
      today.setMinutes(0)
      today.setSeconds(0)

      if (item.end) {
        return item.end >= today
      } else {
        return item.start >= today
      }
    })

    // filter for tags if defined
    if (filter) {
      resultList = resultList.filter((item) => {
        return (item.tags.indexOf(filter) > -1)
      })
    }

    // sort ascending by starting date
    resultList.sort((a, b) => a.start.getTime() - b.start.getTime())

    return resultList
  }
}

export default buuiltCalendarService
