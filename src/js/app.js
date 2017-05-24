import $ from 'jquery';
import 'aos/dist/aos.css';
import AOS from 'aos'
import Rellax from 'rellax';

$(window).on("load", function(){
  AOS.init({
      disable: window.innerWidth < 960,
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
  });

  var rellax = new Rellax('.rellax', {
    center: true
  });
  console.log('hello');
});
