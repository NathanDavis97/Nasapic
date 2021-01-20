const { AppState } = require('../AppState')
const { nasaApi } = require('./axiosservice')

const key = 'apod?api_key=uk5mSxFkK9V65pS1W2OosKI3YOxbhtp5r0FD1git&date='
class Apodservice {
  async searchApod (query) {
    try {
      console.log('help')
      const res = await nasaApi.get(key + query)
      console.log(res.data.url)
      AppState.photo = res.data.url
    } catch (error) {
      console.log(error)
    }
  }

  selectPicture (picture) {
    AppState.photo = picture
  }
}
export const apodservice = new Apodservice()
