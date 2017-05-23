import $ from 'jquery';
import 'aos/dist/aos.css';
import AOS from 'aos'
import Rellax from 'rellax';

$(document).ready(function() {
  AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
  });

  var rellax = new Rellax('.rellax', {
    center: true
  });
  console.log('hello');
});
