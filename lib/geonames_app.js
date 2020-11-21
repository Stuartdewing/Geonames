// Ocean ----------------------------	
$('#buttonone').click(function(){
	$.ajax({
		url: "lib/get_info.php",
		type: "POST",
		dataType: "json",
		data: {
			lat: $("#oceanlat").val(),
			lng: $("#oceanlng").val()
		},

		success: function(result) {
			console.log(result);
			if (result.status.name == "ok") {
				$('#resultsname').html("Ocean");
				$('#resultsvaluename').html("The nearest ocean is:");
				$('#resultsvalue').html(result['data']['name']);
			}
		},
		error: function(jqXHR, textStatus, errorThrow) {
			console.log("Error!!!!");
		}
	});
});
// Nearby Place ----------------------------	
$('#buttontwo').click(function(){
	$.ajax({
		url: "lib/nearbyplace.php",
		type: "POST",
		dataType: "json",
		data: {
			lat: $("#nearlat").val(),
			lng: $("#nearlng").val()
		},
		success: function(result) {
			console.log(result);
			if (result.status.name == "ok") {
				$('#resultsname').html("Nearby");
				$('#resultsvaluename').html("The nearest place is:");
				$('#resultsvalue').html(result['data'][0]['toponymName']);
			}
		},
		error: function(jqXHR, textStatus, errorThrow) {
			console.log("Error!!!!", textStatus, errorThrow);
		}
	});
});
// City ----------------------------	
$('#buttonthree').click(function(){
	$.ajax({
		url: "lib/city.php",
		type: "POST",
		dataType: "json",
		data: {
			lat: $("#citylat").val(),
			lng: $("#citylng").val()
		},
		success: function(result) {
			console.log(result);
			if (result.status.name == "ok") {
				$('#resultsname').html("City");
				$('#resultsvaluename').html("Nearest city is:");
				$('#resultsvalue').html(result['data']['city']);
			}
		},
		error: function(jqXHR, textStatus, errorThrow) {
			console.log("Error!!!!", textStatus, errorThrow);
		}
	});
});




