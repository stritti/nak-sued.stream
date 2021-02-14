import airtableBase from './airtable.service'
const BASE = 'Gemeinde'
const ACTIVE_VIEW = 'activeCongregations'

const congregationService = {
  async getList () {
    const response = await airtableBase.get(`${BASE}?view=${ACTIVE_VIEW}`)
    const resultList = response.data.records.map((item) => {
      return {
        id: item.id,
        ...item.fields
      }
    })

    return resultList
  },
  async get (url) {
    const filter = encodeURIComponent(`{Link} = "${url}"`)
    const response = await airtableBase.get(`${BASE}?view=${ACTIVE_VIEW}&filterByFormula=${filter}&maxRecords=1`)
    const resultList = response.data.records.map((item) => {
      return {
        id: item.id,
        ...item.fields
      }
    })

    return resultList[0]
  }
}

export default congregationService
