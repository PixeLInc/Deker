// Christmas has snow.. right?

/* Start Snow */
var disabled = false;
var shouldBeStorm = false;

if (Math.random() > 0.8)
  shouldBeStorm = true;

console.log('Storm: ' + shouldBeStorm);

function snowLoop() {
  var randTime = null;

  if (shouldBeStorm)
    randTime = Math.floor(Math.random() * 50 * 3);
  else
    randTime = Math.floor(Math.random() * 300 * 2);

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
