// var map = new google.maps.Map(document.getElementById('map'), mapOptions); 
// map.setOptions({styles: styles});

function initialize() {
  var centerLatlng = new google.maps.LatLng(52.221421, 21.004352);
  var libraryLatlng = new google.maps.LatLng(52.214325, 21.002829);
  var MDMLatlng = new google.maps.LatLng(52.221312, 21.016294);
  var ReytanLatlng = new google.maps.LatLng(52.208000, 21.020285);
  var IbisLatlng = new google.maps.LatLng(52.254103, 20.998860);
  var RialtoLatlng = new google.maps.LatLng(52.223247, 21.008117);


  var mapOptions = {
  zoom: 13,
  center: centerLatlng
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
  content: '<div class="info-popup"><h6>Biblioteka Narodowa</h6><p>(Scalar conference venue)</p></div>'
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

  var mdmWindow = new google.maps.InfoWindow({
  content: '<div class="info-popup"><a href="http://www.hotelmdm.com.pl/default-en.html"><h6>MDM Hotel<img src="images/icons/star.svg"/><img src="images/icons/star.svg"/><img src="images/icons/star.svg"/></h6></a><p>Very good location, close to the conference venue as well as places worth seeing in Warsaw.</p><p><b>Price:</b> 251.64 PLN (68 USD) for single or double room (<b><i>included:</i></b> 8% VAT, breakfast, internet)</p><p><b>Address:</b> pl. Konstytucji 1</p><p><b>Email:</b> <a href="mailto:hotel.mdml@syren.com.pl">hotel.mdml@syren.com.pl</a></p><p><b>Promo Code:</b> scalar 2015</p><p><a href="http://warszawa.jakdojade.pl/?fn=plac+Konstytucji+1&fc=52.22139:21.01635&tn=BIBLIOTEKA+NARODOWA&ts=BIBLIOTEKA+NARODOWA&tc=52.21311:21.00624&d=11.04.15&h=09:00&ia=false&t=0&n=0&ri=0&cid=3000&as=true&locale=en#tabId=0&">How to get to conference venue</a></p></div>'
  });

  var mdmMarker = new google.maps.Marker({
    position: MDMLatlng,
    map: map,
    icon: regularMarker,
    title: 'MDM Hotel'
  });

  google.maps.event.addListener(mdmMarker, 'click', function() {
  mdmWindow.open(map, mdmMarker);
  });

  // ============================================

  var reytanWindow = new google.maps.InfoWindow({
  content: '<div class="info-popup"><a href="http://www.reytan.pl/en/core/home.php?_PageID=39176"><h6>Reytan Hotel<img src="images/icons/star.svg"/><img src="images/icons/star.svg"/><img src="images/icons/star.svg"/></h6></a><p><b>Price:</b> 180 PLN (49 USD) for single room &amp; 240 PLN (65 USD) for double room (<b><i>included:</i></b> 8% VAT, breakfast)</p><p><b>Address:</b> ul. Tadeusza Rejtana 6</p><p><b>Email:</b> <a href="mailto:rez@reytan.pl">rez@reytan.pl</a></p><p><b>Promo Code:</b> scalar 2015</p><p><a href="https://www.google.pl/maps/dir/HOTEL+REYTAN,+Tadeusza+Rejtana,+Warsaw/Biblioteka+Narodowa,+aleja+Niepodleg%C5%82o%C5%9Bci,+Warsaw/@52.211123,21.0026936,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x471ecab7cbed96f5:0xb9663a16f2048772!2m2!1d21.020343!2d52.208003!1m5!1m1!1s0x471eccc3d4b32f9d:0x9140378313c7f946!2m2!1d21.003451!2d52.213658!3e3">How to get to conference venue</a></p></div>'
  });

  var reytanMarker = new google.maps.Marker({
    position: ReytanLatlng,
    map: map,
    icon: regularMarker,
    title: 'Reytan Hotel'
  });

  google.maps.event.addListener(reytanMarker, 'click', function() {
  reytanWindow.open(map, reytanMarker);
  });

  // ============================================

  var ibisWindow = new google.maps.InfoWindow({
  content: '<div class="info-popup"><a href="http://www.ibis.com/gb/hotel-3714-ibis-warszawa-stare-miasto-old-town/index.shtml"><h6>Ibis Hotel<img src="images/icons/star.svg"/><img src="images/icons/star.svg"/><img src="images/icons/star.svg"/></h6></a><p>Located very close to the Old Town.</p><p><b>Price:</b> 157.25 PLN (43 USD) for single or double room (<b><i>included:</i></b> 8% VAT), breakfast is 34 PLN per person</p><p><b>Address:</b> ul. Muranowska 2</p><p><b>Email:</b> <a href="mailto:h3714-re@accor.com">h3714-re@accor.com</a></p><p><b>Promo Code:</b> scalar 2015</p><p><a href="http://warszawa.jakdojade.pl/index.html?fn=Muranowska+2&fc=52.25409:20.99863&tn=BIBLIOTEKA+NARODOWA&ts=BIBLIOTEKA+NARODOWA&tc=52.21311:21.00624&d=11.04.15&h=09:00&ia=false&t=0&n=0&ri=0&cid=3000&as=true#tabId=0&">How to get to conference venue</a></p></div>'
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