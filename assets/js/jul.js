// Christmas has snow.. right?

/* Start Snow */
var disabled = false;
var shouldBeStorm = Math.random() > 0.8 ? true : false;

console.log('Storm: ' + shouldBeStorm);

function snowLoop() {
  var randTime = shouldBeStorm ? Math.floor(Math.random() * 50 * 3) : Math.floor(Math.random() * 300 * 2);

  if (disabled)
    return;

  setTimeout(function() {
    letItSnow();
    snowLoop();
  }, randTime);
}

function toggleSnow() {
  disabled = !disabled;
  $('#disnow').html(disabled ? 'Enable Snow' : 'Disable Snow');

  if (!disabled)
    snowLoop(); // get er goin again
}

function letItSnow() {
  var snow = $('<div class="snow"></div>');
  var flakeDiv = $('#snowflakos');
  flakeDiv.prepend(snow);

  var x = Math.floor(Math.random() * flakeDiv.width());
  var speed = Math.floor(Math.random() * 500 * 40);

  snow.css('left', x + 'px').html('*');

  snow.animate({
    top: document.body.scrollHeight - 30 + 'px',
    opacity: '0',
  }, 2000, function() {
    $(this).remove();
  });
}

snowLoop();
/* End Snow */

/* DAD?.. Er- I mean SANTA? */
const SANTA_IMAGE = './assets/images/santa.png';

function createAndSlide() {
  var santaDiv = $(`<div class='santaDiv'> </div>`);
  var santa = $(`<img id='santa' src='${SANTA_IMAGE}' />`);

  $('body').append(santaDiv);
  santaDiv.append(santa);
  santa.css('left', 0);

  console.log(santaDiv.width());
  console.log(santa.css('left'));

  // TODO: fix
  setInterval(function() {
   santa.css('left', santa.css('left', (santa.css('left') + 10) + 'px'));
  }, 100);
}

$('document').ready(function() {
  createAndSlide();
});

/* Bye Santa */
