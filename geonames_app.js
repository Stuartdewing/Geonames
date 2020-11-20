// Ocean ----------------------------	
$('#buttonone').click(function(){
	$.ajax({
		url: "get_info.php",
		type: "POST",
		dataType: "json",
		data: {
			lat: 0.1278,
			lng: 51.5074
		},
		success: function(result) {
			console.log(result);
			if (result.status.name == "ok") {
				$('#resultsname').html("Ocean");
				$('#resultsvaluename').html("The nearest ocean to 0.1278/51.5074:");
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
		url: "nearbyplace.php",
		type: "POST",
		dataType: "json",
		data: {
			lng: 0.1278,
			lat: 51.5074
		},
		success: function(result) {
			console.log(result);
			if (result.status.name == "ok") {
				$('#resultsname').html("Nearby");
				$('#resultsvaluename').html("The nearest place to 51.5074/0.1278:");
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
		url: "elevation.php",
		type: "POST",
		dataType: "json",
		data: {
			lng: -73.96625,
			lat: 40.78343
		},
		success: function(result) {
			console.log(result);
			if (result.status.name == "ok") {
				$('#resultsname').html("Elevation");
				$('#resultsvaluename').html("Nearest city to 40.78343/ -73.96625:");
				$('#resultsvalue').html(result['data']['city']);
			}
		},
		error: function(jqXHR, textStatus, errorThrow) {
			console.log("Error!!!!", textStatus, errorThrow);
		}
	});
});




