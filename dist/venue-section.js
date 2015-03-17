function initialize() {
  var centerLatlng = new google.maps.LatLng(52.211549, 21.003652);
  var libraryLatlng = new google.maps.LatLng(52.214008, 21.003030);
  var metroLatlng = new google.maps.LatLng(52.209262, 21.007665);
  var tramLatlng = new google.maps.LatLng(52.212853, 21.006356);

  var mapOptions = {
    zoom: 15,
    center: centerLatlng,
    disableDefaultUI: true
  };

  var map = new google.maps.Map(document.getElementById('venue-map'), mapOptions);

  map.setOptions({styles: styles});

// ============================================

  var regularMarker = {
  path: 'M13,1 C6.4,1,1,6.1,1,12.5S13,33,13,33s12-14.2,12-20.5S19.6,1,13,1z',
  fillColor: '#7dd9e2',
  fillOpacity: 1,
  scale: 1,
  strokeColor: 'white',
  strokeWeight: 2
  };

  var libraryMarker = {
  path: 'M13,1 C6.4,1,1,6.1,1,12.5S13,33,13,33s12-14.2,12-20.5S19.6,1,13,1z',
  fillColor: '#114476',
  fillOpacity: 1,
  scale: 1,
  strokeColor: 'white',
  strokeWeight: 2
  };

// ============================================

  var libraryWindow = new google.maps.InfoWindow({
  content: '<div class="info-popup"><h6>Biblioteka Narodowa&mdash;conference venue</h6><p><b>Address:</b> aleja Niepodległości 213</p></div>'
  });

  var libraryMarker = new google.maps.Marker({
  position: libraryLatlng,
  map: map,
  icon: libraryMarker,
  title: 'Biblioteka Narodowa - Conference venue'
  });

  google.maps.event.addListener(libraryMarker, 'click', function() {
  libraryWindow.open(map, libraryMarker);
  });

// ============================================

  var metroWindow = new google.maps.InfoWindow({
  content: '<div class="info-popup"><h6>Pole Mokotowskie</h6><p>is the closest metro station&mdash;5 mins ride from the city center and 5 mins walk to get to the venue</p></div>'
  });

  var metroMarker = new google.maps.Marker({
    position: metroLatlng,
    map: map,
    icon: regularMarker,
    title: 'Metro Station'
  });

  google.maps.event.addListener(metroMarker, 'click', function() {
  metroWindow.open(map, metroMarker);
  });

  // ============================================

  var tramWindow = new google.maps.InfoWindow({
  content: '<div class="info-popup"><h6>Biblioteka Narodowa tram stop</h6><p>6 mins ride by tram 17 or 33 from the Central Railway Station</p></div>'
  });

  var tramMarker = new google.maps.Marker({
    position: tramLatlng,
    map: map,
    icon: regularMarker,
    title: 'Tram Stop'
  });

  google.maps.event.addListener(tramMarker, 'click', function() {
  tramWindow.open(map, tramMarker);
  });
}

var styles = [
{
  "featureType": "administrative",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#114476"
    }
  ]
},
{
  "featureType": "administrative",
  "elementType": "labels.text.stroke",
  "stylers": [
    {
      "color": "#2aaac0"
    }
  ]
},
{
  "featureType": "administrative",
  "elementType": "labels.icon",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "administrative.country",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#2184a4"
    }
  ]
},
{
  "featureType": "administrative.province",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "visibility": "on"
    },
    {
      "color": "#2896b2"
    }
  ]
},
{
  "featureType": "landscape",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "hue": "#00daff"
    },
    {
      "saturation": "70"
    },
    {
      "lightness": "-45"
    },
    {
      "gamma": "0.82"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "hue": "#00d6ff"
    },
    {
      "lightness": "-40"
    },
    {
      "saturation": "52"
    },
    {
      "gamma": "0.82"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#114476"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "labels.text.stroke",
  "stylers": [
    {
      "color": "#3eafca"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "labels.icon",
  "stylers": [
    {
      "hue": "#0081ff"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#32c1d0"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#32c1d0"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "labels.icon",
  "stylers": [
    {
      "hue": "#00e6ff"
    },
    {
      "saturation": "-34"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#32c1d0"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#4096b4"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#4096b4"
    }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#114476"
    }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "labels.text.stroke",
  "stylers": [
    {
      "color": "#32c1d0"
    }
  ]
},
{
  "featureType": "road.local",
  "elementType": "geometry.stroke",
  "stylers": [
    {
      "color": "#4096b4"
    }
  ]
},
{
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#114476"
    }
  ]
},
{
  "featureType": "road.local",
  "elementType": "labels.text.stroke",
  "stylers": [
    {
      "color": "#32c1d0"
    }
  ]
},
{
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#22dff3"
    }
  ]
},
{
  "featureType": "transit.station.airport",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "hue": "#00e1ff"
    },
    {
      "gamma": "0.52"
    },
    {
      "saturation": "68"
    },
    {
      "lightness": "-37"
    }
  ]
},
{
  "featureType": "transit.station.airport",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#114476"
    }
  ]
},
{
  "featureType": "transit.station.airport",
  "elementType": "labels.text.stroke",
  "stylers": [
    {
      "color": "#32bcd0"
    }
  ]
},
{
  "featureType": "transit.station.rail",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#114476"
    }
  ]
},
{
  "featureType": "transit.station.rail",
  "elementType": "labels.text.stroke",
  "stylers": [
    {
      "color": "#32c1d0"
    }
  ]
},
{
  "featureType": "transit.station.rail",
  "elementType": "labels.icon",
  "stylers": [
    {
      "lightness": "4"
    },
    {
      "saturation": "-23"
    },
    {
      "gamma": "0.68"
    },
    {
      "hue": "#00e7ff"
    }
  ]
},
{
  "featureType": "water",
  "elementType": "all",
  "stylers": [
    {
      "hue": "#00a1ff"
    },
    {
      "saturation": "97"
    },
    {
      "lightness": "-64"
    },
    {
      "gamma": "0.81"
    }
  ]
}
]