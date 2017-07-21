//the array with the locations and descriptions
var locations = [
	{
		name: "Office Alpha",
		label: 'A',
		coordinates: {
			lat:48.19143233160394,
			lng:16.343021392822266 
		},
		weekend: true,

	}, {
		name: "Office Gamma",
		label: 'B',
		coordinates: {
			lat:48.18158980314533,
			lng:16.34293556213379
		},
		weekend: false,
	}, {
		name: "Office Delta",
		label: 'C',
		coordinates: {
			lat:48.19332050758218,
			lng:16.358814239501953
		},
		weekend: false,
	}
];

//from here on are the map functions
function draw_map() {
    var mapCanvas = document.getElementById("map");

        var myLatLng = {lat: 48.190909, lng: 16.337674};

        var mapOptions = {
            center: new google.maps.LatLng(48.190909, 16.337674),
            zoom: 14
        };

	var map = new google.maps.Map(mapCanvas, mapOptions);
	return map;
}
//place marker function with if and else for the booleans value
function place_marker(location, map) {
	var contentString = location.name + '<br>';
	if (location.weekend) {
		contentString += 'Open';
	} else {
		contentString += 'Closed';
	}
	contentString += ' on weekends.';

	var infoWindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker = new google.maps.Marker({
	  position: location.coordinates,
	  map: map,
	  label: location.label,
	});

	marker.addListener('click', function() {
		infoWindow.open(map, marker);
	});
}

var myMap = draw_map();

locations.forEach(function(loc) {
	place_marker(loc, myMap);
});