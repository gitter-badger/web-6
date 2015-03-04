$(document).on('click', '.panel-heading .clickable', function(e){
    var $this = $(this);
    var icon = $this.parents('.panel-heading').find('span.clickable')
    var colapsedContent = $this.parents('.panel').find('.panel-body')
	if(!icon.hasClass('panel-collapsed')) {
    colapsedContent.slideDown();
		icon.addClass('panel-collapsed');
		icon.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	} else {
    colapsedContent.slideUp();
		icon.removeClass('panel-collapsed');
		icon.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	}
})

$(document).on('click', 'button.login', function(e){
  window.open("http://goo.gl/forms/szLyDxP1NA", "_blank");
})
