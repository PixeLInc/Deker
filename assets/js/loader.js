function onReady(cb) {
  var lId = window.setInterval(check, 10); // Wait 1 second, heh

  function check() {
    var body = $('body');
    if (body !== undefined) {
      window.clearInterval(lId);
      cb.call(this);
    }
  }
}

onReady(function() {
  $('.centered').fadeIn('slow');
  $('#loader').fadeOut('slow');
});
