(function($){

	var currency = {
		dolar: 0,
		euro: 0,
		utm: 0,
		uf: 0,
	
	}

	$.ajax({
		url: 'http://www.mindicador.cl/api/',
		method: 'GET'
	}).done(function(data){
		console.log(data)

		currency.dolar = data.dolar.valor
		currency.euro  = data.euro.valor
		currency.uf    = data.uf.valor
		currency.utm   = data.utm.valor	

		$('.idolar').html('$'+ currency.dolar)
		$('.ieuro').html('$'+ currency.euro)
		$('.iuf').html('$'+ currency.uf)
		$('.iutm').html('$' + currency.utm)
		
		
	});

	$('.convertir').on('submit', function(event) {
		event.preventDefault();
		var valor_campo = parseFloat($('.moneda').val())

		$('._dolar').text((valor_campo / currency.dolar).toFixed(2))		
		$('._euro').text((valor_campo / currency.euro).toFixed(2))
		$('._uf').text((valor_campo / currency.uf).toFixed(2))
		$('._utm').text((valor_campo / currency.utm).toFixed(2))		

		// console.log(valor_campo)
	});

	$('.transformar').on('submit', function(event) {
		event.preventDefault();
		var valor_dolar = parseInt($('.cash').val())

		$('._dolarpeso').text((currency.dolar * valor_dolar).toFixed(0))
});
})(jQuery)