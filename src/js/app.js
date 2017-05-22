import $ from 'jquery';
import 'aos/dist/aos.css';
import AOS from 'aos'

$(document).ready(function() {
  AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
  });
  console.log('hello');
});
