var currentSlideshow = undefined;
var currentSlide = 0;
var allSlides = undefined;
var disabled = false;

$(document).ready(function() {
  allSlides = document.querySelectorAll('.slides .slide');

  if (allSlides.length == 0) {
    console.log('There are no slides!');
    disabled = true;
  }

  if(!disabled)
    currentSlideshow = setInterval(next, 5000);

  console.log('Done loading slideshow stuff...');
});

function next() {
  if (currentSlideshow === undefined)
    return;

 //  console.log('next!');
  // Set the old one
  allSlides[currentSlide].className = 'slide';

  currentSlide = (currentSlide + 1) % allSlides.length;
  // console.log('Next: ' + currentSlide);
  // console.log(allSlides[currentSlide]);

  // Set the new one
  allSlides[currentSlide].className = 'slide current';
}

function toggleSlideshow() {
  // console.log('Toggling... ' + currentSlideshow );
  disabled = !disabled;

  window.clearInterval(currentSlideshow);
  if (!disabled)
    currentSlideshow = setInterval(next, 5000);
  else
    clearInterval(currentSlideshow);

}
