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
			url = 'http://ermolaevaekaterina.ru/contact_me.php',
			defObj = _ajaxForm(form, url);
			//ответ сервера
		if(defObj) {
			defObj.done(function(answer) {
			console.log(answer);
			console.log(answer.status);
			var successDiv = $('.success-mes'),
				errorDiv = $('.error-mes');
			if(answer.status === "success"){
				errorDiv.hide();
				successDiv.html(answer.text).show();
				$('form').trigger('reset');
			} 	else {
					successDiv.hide();				
					errorDiv.html(answer.text).show();
				}
			});
		}			
	};

	var _ajaxForm = function(form, url) {
		console.log('AJAX request with validation');
		if(!validation.validateForm(form)) {
			return false;
		}

		data = form.serialize();

		var result = $.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		}).fail(function(answer){
			console.log('Проблемы в PHP');
			//console.log(answer);
			$('.error-mes').text('На сервере произошла ошибка!').show();
		});

		return result;		
	};

	return {
		init : init
	};

})();

contactMe.init();