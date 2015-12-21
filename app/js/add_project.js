var mainModule = (function (){
	
	var init = function () {
		_setUpListners();
	}

	var _setUpListners = function () {
		$('#new-item').on('click', _showProject);
		$('#new-project').on('submit', _newProject);

		$('.custom-file-input').on('change', function(){
			$('form').find('#picture').trigger('hideTooltip').removeClass('has-error');
		});
	};

	var _showProject = function (ev) {
		//console.log("eeee");
		ev.preventDefault();
		var newPopup = $('#project-popup'),
			form = newPopup.find('.project-form');


		newPopup.bPopup({
			speed: 650,
			transition: 'slideDown',
			onClose: function() {
				form.find('.server-mes').text('').hide();
				form.trigger('reset');
			}
		});
	};

	var _newProject = function (ev) {
		//console.log("eeee");
		ev.preventDefault();

		var form = $(this),
			url = 'http://ermolaevaekaterina.ru/new_project.php',
			defObj = _ajaxForm(form, url);
		

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

mainModule.init();