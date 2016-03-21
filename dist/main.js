function initialize() {
  var centerLatlng = new google.maps.LatLng(52.221421, 21.004352);
  var ConfLatlng = new google.maps.LatLng(52.249499, 20.993205);
  var RadissonLatlng = new google.maps.LatLng(52.236786, 20.998371);
  var IbisCetrumLatlng = new google.maps.LatLng(52.208000, 21.020285);
  var IbisLatlng = new google.maps.LatLng(52.254208,  20.998931);
  var RialtoLatlng = new google.maps.LatLng(52.223247, 21.008117);


  var mapOptions = {
    zoom: 11,
    center: centerLatlng,
    disableDefaultUI: true
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

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

  var ConfMarker = {
  path: 'M13,1 C6.4,1,1,6.1,1,12.5S13,33,13,33s12-14.2,12-20.5S19.6,1,13,1z',
  fillColor: '#114476',
  fillOpacity: 1,
  scale: 1,
  strokeColor: 'white',
  strokeWeight: 2
  };

// ============================================

  var ConfWindow = new google.maps.InfoWindow({
  content: '<div class="info-popup"><h6>Centrum Konferencyjne Muranow</h6><p>Scalar conference venue</p><img src="images/museum_photoXS.png"/></div>'
  });

  var ConfMarker = new google.maps.Marker({
  position: ConfLatlng,
  map: map,
  icon: ConfMarker,
  title: 'Centrum Konferencyjne Muranow - Conference venue'
  });

  google.maps.event.addListener(ConfMarker, 'click', function() {
 ConfWindow.open(map, ConfMarker);
  });

// ============================================

  var RadissonWindow = new google.maps.InfoWindow({
  content: '<div class="info-popup"><a href="https://www.radissonblu.com/en#/map-results"><h6>Radisson Blu Centrum Hotel<br><img src="images/icons/star.svg"/><img src="images/icons/star.svg"/><img src="images/icons/star.svg"/><img src="images/icons/star.svg"/><img src="images/icons/star.svg"/></h6></a><p>Very close to the venue of the conference, planty of luxury in a very good price.</p><p><b>Price:</b> 312,12 PLN PLN for single &amp; 376,92 PLN for double room (<b><i>included:</i></b> 8% VAT, breakfast and Internet)</p><p><b>Address:</b> Grzybowska 24</p><p><b>Email:</b> <a href="mailto:reservations.warsaw@radissonblu.com">reservations.warsaw@radissonblu.com</a></p><p><b>Promo Code:</b> scalar 2016</p></div>'
  });

  var RadissonMarker = new google.maps.Marker({
    position: RadissonLatlng,
    map: map,
    icon: regularMarker,
    title: 'RasissonBlu Centrum Hotel'
  });

  google.maps.event.addListener(RadissonMarker, 'click', function() {
  RadissonWindow.open(map, RadissonMarker);
  });

  // ============================================

  var IbisCetrumWindow = new google.maps.InfoWindow({
  content: '<div class="info-popup"><a href="http://www.accorhotels.com/gb/hotel-2894-ibis-warszawa-centrum/index.shtml"><h6>IBIS Warszawa Centrum<img src="images/icons/star.svg"/><img src="images/icons/star.svg"/></h6></a><p></p><p><b>Price:</b> 165 PLN for single room &amp; 185 PLN for double room (<b><i>included:</i></b> 8% VAT, breakfast and Internet)</p><p><b>Address:</b> Ave Solidarnosci 165</p><p><b>Email:</b> <a href="mailto:H2894@accor.com">H2894@accor.com</a></p><p><b>Promo Code:</b> scalar 2016</p></div>'
  });

  var IbisCetrumMarker = new google.maps.Marker({
    position: IbisCetrumLatlng,
    map: map,
    icon: regularMarker,
    title: 'IBIS Warszawa Centrum'
  });

  google.maps.event.addListener(IbisCetrumMarker, 'click', function() {
  IbisCetrumWindow.open(map, IbisCetrumMarker);
  });

  // ============================================

  var ibisWindow = new google.maps.InfoWindow({
  content: '<div class="info-popup"><a href="http://www.accorhotels.com/gb/hotel-3714-ibis-warszawa-stare-miasto-old-town/index.shtml"><h6>Ibis Hotel<img src="images/icons/star.svg"/><img src="images/icons/star.svg"/><img src="images/icons/star.svg"/></h6></a><p>Located very close to the Old Town.</p><p><b>Price:</b> 165 PLN for single &amp; 185 PLN for double room (<b><i>included:</i></b> 8% VAT, breakfast and Internet)</p><p><b>Address:</b> ul. Muranowska 2</p><p><b>Email:</b> <a href="mailto:h3714-re@accor.com">h3714-re@accor.com</a></p><p><b>Promo Code:</b> scalar 2016</p></div>'
  });

  var ibisMarker = new google.maps.Marker({
    position: IbisLatlng,
    map: map,
    icon: regularMarker,
    title: 'Ibis Hotel'
  });

  google.maps.event.addListener(ibisMarker, 'click', function() {
  ibisWindow.open(map, ibisMarker);
  });

  // ============================================
/*
  var rialtoWindow = new google.maps.InfoWindow({
  content: '<div class="info-popup"><a href="http://www.rialto.pl/en/"><h6>Rialto Hotel<img src="images/icons/star.svg"/><img src="images/icons/star.svg"/><img src="images/icons/star.svg"/><img src="images/icons/star.svg"/><img src="images/icons/star.svg"/></h6></a><p>A bit of luxury in the first boutique hotel in Warsaw.</p><p><b>Price:</b> 360 PLN (97 USD) for single room &amp; 460 PLN (124 USD) for double room (<b><i>included:</i></b> 8% VAT, breakfast, internet, sauna, gym)</p><p class="address"><b>Address:</b> ul. Wilcza 73</p><p><b>Email:</b> <a href="mailto:reservations@rialto.pl">reservations@rialto.pl</a></p><p><b>Promo Code:</b> scalar 2015</p><p><a href="https://www.google.pl/maps/dir/Hotel+Rialto,+Wilcza+73,+00-670+Warszawa/Biblioteka+Narodowa,+aleja+Niepodleg%C5%82o%C5%9Bci,+Warsaw/@52.218091,20.9972494,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x471eccec43b7a925:0xc3ff25a2c4c6653e!2m2!1d21.008214!2d52.22327!1m5!1m1!1s0x471eccc3d4b32f9d:0x9140378313c7f946!2m2!1d21.003451!2d52.213658!3e3">How to get to conference venue</a></p></div>'
  });

  var rialtoMarker = new google.maps.Marker({
    position: RialtoLatlng,
    map: map,
    icon: regularMarker,
    title: 'Rialto Hotel'
  });

  google.maps.event.addListener(rialtoMarker, 'click', function() {
  rialtoWindow.open(map, rialtoMarker);
  });
*/
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