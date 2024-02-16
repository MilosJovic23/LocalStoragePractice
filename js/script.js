

$(document).ready(function () {
	var trenutniGrad = localStorage.getItem("trenutniGrad");

	var gradIvreme=$("#trenutnaTemperatura");
	gradIvreme= gradIvreme.text(localStorage.getItem("vreme"));
	$("#grad option[value='" + trenutniGrad + "']").attr("selected", true);
	//
	$("#grad").change(function () {
		var grad = $(this).val();
		console.log(grad);

		$.ajax({
			method: "GET",
			url: "http://api.weatherapi.com/v1/current.json",
			data: {
				key: "4337f73aa1334df8bb7133720232812",
				q: grad,
				aqi: "no",
			},
			success: function (response) {
				console.log(trenutniGrad);
				let trenutna = $("#trenutnaTemperatura");
				var gradTemperatura =
					"Grad: " +
					response.location.name +
					", " +
					"Temperatura " +
					response.current.temp_c +
					"˚";
				//
				trenutna = trenutna.text(gradTemperatura);
				localStorage.setItem("trenutniGrad", grad);
				localStorage.setItem("vreme", gradTemperatura);
			},
		});
	});
});
