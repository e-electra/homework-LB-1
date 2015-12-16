$(document).ready(function($) {
	$('.content-info-job-item:last').css('border-bottom', 'none');
	$('.content-info-edu-item:last').css('border-bottom', 'none');
	$('input, textarea').placeholder({customClass:'my-placeholder'});
	$('.custom-file-input').on('change', function(){
		realVal = $(this).val();
		lastIndex = realVal.lastIndexOf('\\') + 1;
		if (lastIndex !== -1) {
			realVal = realVal.substr(lastIndex);
			$(this).prev('.mask-wrap').find('#picture').val(realVal);
		}
	});
});

var mainModule = (function (){
	
	var init = function () {
		_setUpListners();
	}

	var _setUpListners = function () {
		$('#new-item').on('click', _showProject);
	};

	var _showProject = function (ev) {
		console.log("eeee");
		ev.preventDefault();
		$('#project-popup').bPopup({
			speed: 650,
			transition: 'slideDown'
		});
	};

	return {
		init : init
	};

})();

mainModule.init();