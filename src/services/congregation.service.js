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
  async get (slug, pin) {
    const filter = encodeURIComponent(`AND({slug} = "${slug}", {pin} = "${pin}")`)
    const response = await airtableBase.get(`${BASE}?view=${ACTIVE_VIEW}&filterByFormula=${filter}&maxRecords=1`)
    const resultList = response.data.records.map((item) => {
      return {
        id: item.id,
        ...item.fields
      }
    })

    return resultList[0]
  },
  async request (data) {
    const response = await airtableBase.post(`${BASE}`, {
      records: [
        {
          fields: {
            ...data,
            pin: Number(data.pin),
            Status: 'Requested',
            Field: 'organizer'

          }
        }
      ]
    })
    if (response.status === 200) {
      return {
        ...response.data.records[0].fields,
        id: response.data.records[0].id
      }
    } else {
      return null
    }
  }
}

export default congregationService
