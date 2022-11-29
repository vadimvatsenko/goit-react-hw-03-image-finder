import axios from 'axios';

axios.get('https://pixabay.com/api/?key=29703536-3492bea623abb7896113a32cf&q=yellow+flowers&image_type=photo')
  .then(function (response) {
    // обработка успешного запроса
    console.log(response);
  })
  .catch(function (error) {
    // обработка ошибки
    console.log(error);
  })
