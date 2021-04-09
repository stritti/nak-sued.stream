import emailjs from 'emailjs-com'
const emailjsService = {

  sendPinRequest (request, success, failed) {
    emailjs.send('service_iiiu1cj', 'template_2oga2u8',
      request, process.env.VUE_APP_EMAILJS_USER_ID)
      .then(function (response) {
        success(response)
      }, function (error) {
        failed(error)
      })
  }

}

export default emailjsService
