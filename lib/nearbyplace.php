<?php
	$url='http://api.geonames.org/findNearbyPlaceNameJSON?lat=51.5074&lng=0.2178&username=stuartdewing';

	// cURL - 1) - Create cURL resource
	$curl = curl_init();
	// cURL - 2) - Set cURL options
	curl_setopt($curl, CURLOPT_URL,$url);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	// cURL - 3) - Run cURL (excute http request)
	$result=curl_exec($curl);
	// cURL - 4) - Create cURL resource
	curl_close($curl);

	$decode = json_decode($result,true);	

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "Tamam Shud";
	$output['data'] = $decode['geonames'];
	
	header('Content-Type: application/json; charset=UTF-8');
	echo json_encode($output); 
?>