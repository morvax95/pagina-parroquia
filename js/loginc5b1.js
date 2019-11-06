$(function() {

	$('.login-load').hide();
	$('.unauth-login').hide();
	$('.error-login').hide();
	$('.mensaje-enviar').hide();
	$('.alert-success').hide();
	$('.alert-warning').hide();

	$('.loginForm').submit(function() {

		$('.unauth-login').hide();
		$('.error-login').hide();		
		$('#nombre').removeClass('required');
		$('#password').removeClass('required');

		var correcto = true;
		if($('#nombre').val() == '')
		{
			$('#nombre').addClass('required');
			correcto = false;
		}
		if($('#password').val() == '')
		{
			$('#password').addClass('required');
			correcto = false;
		}
		if(!correcto)
			return false;

		$.ajax({
			type 		: $(this).attr('method'),
			url			: $(this).attr('action'),
			data		: $(this).serialize(),
			beforeSend	: function() {

				$('.panel-login').hide();
				$('.login-load').show();

			},
			complete 	: function(data) {

			},
			success 	: function(data) {
				
				if(data == 'SI')
				{
					window.location.href = $('#url_absoluto').val() + '/aereo';
				}
				else
				{
					$('.login-load').hide();
					$('.panel-login').show();

					if(data == 'NO')
						$('.unauth-login').show();
					else
						$('.error-login').show();	
				}

			},
			error 		: function(errors) {

				$('.login-load').hide();
				$('.panel-login').show();
				$('.error-login').show();

			}
		});

		return false;

	});
	$('#form_mail_contacto').submit(function() {
		$.ajax({
			type 		: $(this).attr('method'),
			url			: $(this).attr('action'),
			data		: $(this).serialize(),
			beforeSend	: function() {
				$('.btn-enviar').hide();
				$('.mensaje-enviar').show();
			},
			complete 	: function(data) {

			},
			success 	: function(data) {
				
				$('.mensaje-enviar').hide();
				$('.btn-enviar').show();
				$('.alert-success').show();
				$('.frm-contactanos').val('');

			},
			error 		: function(errors) {
				$('.mensaje-enviar').hide();
				$('.alert-warning').show();
				$('.btn-enviar').show();
			}
		});
		return false;
	});
});