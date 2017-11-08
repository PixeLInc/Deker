function toggleSpoiler(element) {
  var content = $(element).find('#content');
  var sTitle = $(element).find('#title');

  sTitle.text(sTitle[0].innerHTML.contains('show') ? sTitle[0].innerHTML.replace('show', 'hide') : sTitle[0].innerHTML.replace('hide', 'show'));

  content.slideToggle('slow', 'swing'); // TODO: Find a fix to make it display block and not inline-block;
}
