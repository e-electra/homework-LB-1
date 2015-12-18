var contactMe = (function (){
	
	var init = function () {
		_setUpListners();
	}

	var _setUpListners = function () {
		$('#contact-me').on('submit', _submitForm);
	}

	var _submitForm = function(ev) {
		console.log('Send Form');
		ev.preventDefault();
		var form = $(this),
			url = 'form-handler.php',
			defObj = _ajaxForm(form, url);
			//ответ сервера
	};

	var _ajaxForm = function(form, url) {
		console.log('AJAX request with validation');
		if(!validation.validateForm(form)) {
			return false;
		}
	};

	return {
		init : init
	};

})();

contactMe.init();