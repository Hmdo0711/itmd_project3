function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
	center: {lat:17.458582, lng:107.042357},
	zoom: 6
  });

  var locations = [
    ['Hanoi - This is the city where I was born.', 21.028511, 105.804817, 6],
    ['Ha Long Bay', 20.8999964, 107.1999992, 4],
    ['Hue Cidatel', 16.449800, 107.562350, 5],
    ['Ba Na Hills, Da Nang', 15.998900, 107.995300, 3],
    ['Phong Nha-Ke Bang National Park, Quang Binh', 17.5552645, 106.112304095671, 2],
    ['Phu Quoc Island, Kien Giang', 10.158625, 103.98402, 1]
  ];

  var infowindow = new google.maps.InfoWindow();
  for (i = 0; i < locations.length; i++) {  
	marker = new google.maps.Marker({
	position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	map: map
  });
  
	google.maps.event.addListener(marker, 'click', (function(marker, i) {
	  return function() {
	    infowindow.setContent(locations[i][0]);
	    infowindow.open(map, marker);
	  }
	})(marker, i));
  }
}

var audio = document.getElementById("music");
	audio.autoplay = true;
	audio.load();

