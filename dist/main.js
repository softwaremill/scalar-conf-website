function initialize() {
  // Center of map, change coordinates, if you want the map to be positioned differently
  var centerLatlng = new google.maps.LatLng(52.221421, 21.004352);


  // Here you can change map zoom
  var mapOptions = {
    zoom: 13,
    center: centerLatlng,
    disableDefaultUI: true
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);


  // Styles for map at the bottom of this file
  map.setOptions({styles: styles});


// ============================================

  // Styles for map markers
  var regularMarker = {
  path: 'M13,1 C6.4,1,1,6.1,1,12.5S13,33,13,33s12-14.2,12-20.5S19.6,1,13,1z',
  fillColor: '#7dd9e2',
  fillOpacity: 1,
  scale: 1,
  strokeColor: 'white',
  strokeWeight: 2
  };

  var venueMarker = {
  path: 'M13,1 C6.4,1,1,6.1,1,12.5S13,33,13,33s12-14.2,12-20.5S19.6,1,13,1z',
  fillColor: '#114476',
  fillOpacity: 1,
  scale: 1,
  strokeColor: 'white',
  strokeWeight: 2
  };

// ============================================

  for (var i = 0; i < hotelsList.length; i++) {

    // If it's a venue, create a venue marker and popup
    if (hotelsList[i].venue == true) {

      (function(i){

        var venueWindow = new google.maps.InfoWindow({
        content: '<div class="info-popup"><h6>'+hotelsList[i].title+'</h6><p>'+hotelsList[i].description+'</p><p><b>Address: </b>'+hotelsList[i].address+'</p></div>'
        });

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(hotelsList[i].coordinates.latitude, hotelsList[i].coordinates.longitude),
          map: map,
          icon: venueMarker,
          title: hotelsList[i].title
        });

        google.maps.event.addListener(marker, 'click', function() {
          venueWindow.open(map, marker);
        });

      })(i)

    } else {

      // If it's a hotel, create a hotel marker and popup
      (function(i){

        var infoWindow = new google.maps.InfoWindow({
          content: '<div class="info-popup"><a href='+hotelsList[i].website+'><h6>'+hotelsList[i].title+'<br><img src="images/icons/star.svg"/><img src="images/icons/star.svg"/><img src="images/icons/star.svg"/><img src="images/icons/star.svg"/><img src="images/icons/star.svg"/></h6></a><p>'+hotelsList[i].description+'</p><p><b>Price:</b> '+hotelsList[i].price.single+' PLN for single &amp; '+hotelsList[i].price.double+' PLN for double room (<b><i>included:</i></b> '+hotelsList[i].included+')</p><p><b>Address:</b> '+hotelsList[i].address+'</p><p><b>Email:</b> <a href="mailto:'+hotelsList[i].email+'">'+hotelsList[i].email+'</a></p><p><b>Promo Code: </b>'+hotelsList[i].promo_code+'</p></div>'
        });

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(hotelsList[i].coordinates.latitude, hotelsList[i].coordinates.longitude),
          map: map,
          icon: regularMarker,
          title: hotelsList[i].title
        });

        google.maps.event.addListener(marker, 'click', function() {
          infoWindow.open(map,marker);
        });

      })(i)

    }
  };
}

// ============================================

// MAP STYLES - makes map blue
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