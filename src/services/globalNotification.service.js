import airtableBase from './airtable.service'

const TABLE_NAME = 'GlobalNotification'
const ACTIVE_VIEW = 'published'

const globalNotification = {
  async getList () {
    const response = await airtableBase.get(`${TABLE_NAME}?view=${ACTIVE_VIEW}`)
    const resultList = response.data.records.map((item) => {
      return {
        id: item.id,
        ...item.fields
      }
    })
    console.log(resultList)

    return resultList
  }
}

export default globalNotification
