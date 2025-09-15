import emailjs from '@emailjs/browser'
const emailjsService = {

  sendPinRequest (request, success, failed) {
    emailjs.send('service_iiiu1cj', 'template_2oga2u8',
      request, import.meta.env.VITE_EMAILJS_USER_ID)
      .then(function (response) {
        success(response)
      }, function (error) {
        failed(error)
      })
  }

}

export default emailjsService
