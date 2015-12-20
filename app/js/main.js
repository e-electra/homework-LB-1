$(document).ready(function($) {

	if(typeof console === 'undefined' || typeof console.log === 'undefined') {
		var console = {};
		console.log = function(){

		};
	}

	if (!Modernizr.placeholders) {
		$('input, textarea').placeholder();
	};

	$('.content-info-job-item:last').css('border-bottom', 'none');
	$('.content-info-edu-item:last').css('border-bottom', 'none');

	$('.no-backgroundsize .content-work-item').each(function(){
		$(this).on('mouseover', function(){
			$(this).children($('.no-backgroundsize .content-work-item-pic-link .work-title')).css('display', 'block');
		});
		$(this).on('mouseout', function(){
			$(this).children($('.no-backgroundsize .content-work-item-pic-link .work-title')).css('display', 'block');
		});
	});

		console.log($('input, textarea'));
		$('.custom-file-input').on('change', function(){
			console.log('input has changed');
			var realVal = $(this).val();
			var $input = $('#picture');
			lastIndex = realVal.lastIndexOf('\\') + 1;
			if (lastIndex !== -1) {
				realVal = realVal.substr(lastIndex);
				$input.val(realVal);
			}
		});
});