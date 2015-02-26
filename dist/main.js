// var map = new google.maps.Map(document.getElementById('map'), mapOptions); 
// map.setOptions({styles: styles});

function initialize() {
  var centerLatlng = new google.maps.LatLng(52.221421, 21.004352);
  var libraryLatlng = new google.maps.LatLng(52.213648, 21.003462);
  var MDMLatlng = new google.maps.LatLng(52.221312, 21.016294);
  var ReitanLatlng = new google.maps.LatLng(52.208000, 21.020285);
  var IbisLatlng = new google.maps.LatLng(52.254103, 20.998860);
  var RialtoLatlng = new google.maps.LatLng(52.223247, 21.008117);


  var mapOptions = {
    zoom: 13,
    center: centerLatlng
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);



  var libraryWindow = new google.maps.InfoWindow({
    content: '<h6>Biblioteka Narodowa description</h6>'
  });

  var libraryMarker = new google.maps.Marker({
    position: libraryLatlng,
    map: map,
    title: 'Biblioteka Narodowa'
  });

  google.maps.event.addListener(libraryMarker, 'click', function() {
    libraryWindow.open(map, libraryMarker);
  });

// ============================================

  var mdmWindow = new google.maps.InfoWindow({
    content: '<h6>MDM Hotel</h6>'
  });

  var mdmMarker = new google.maps.Marker({
      position: MDMLatlng,
      map: map,
      title: 'MDM'
  });

  google.maps.event.addListener(mdmMarker, 'click', function() {
    mdmWindow.open(map, mdmMarker);
  });

  // ============================================

  var reitanWindow = new google.maps.InfoWindow({
    content: '<h6>Reitan Hotel</h6>'
  });

  var reitanMarker = new google.maps.Marker({
      position: ReitanLatlng,
      map: map,
      title: 'Reitan'
  });

  google.maps.event.addListener(reitanMarker, 'click', function() {
    reitanWindow.open(map, reitanMarker);
  });

  // ============================================

  var ibisWindow = new google.maps.InfoWindow({
    content: '<h6>Ibis Hotel</h6>'
  });

  var ibisMarker = new google.maps.Marker({
      position: IbisLatlng,
      map: map,
      title: 'Ibis'
  });

  google.maps.event.addListener(ibisMarker, 'click', function() {
    ibisWindow.open(map, ibisMarker);
  });

  // ============================================

  var rialtonWindow = new google.maps.InfoWindow({
    content: '<h6>Rialton Hotel</h6>'
  });

  var rialtonMarker = new google.maps.Marker({
      position: RialtoLatlng,
      map: map,
      title: 'Rialton'
  });

  google.maps.event.addListener(rialtonMarker, 'click', function() {
    rialtonWindow.open(map, rialtonMarker);
  });

}

// var styles = [
// {
//   featureType: "water",
//   felementType: "geometry",
//   stylers: [
//     {
//       color: "#2189a8"
//     }
//   ]
// },
// {
//   featureType: "landscape",
//   felementType: "geometry",
//   stylers: [
//     {
//       color: "#24a2ba"
//     }
//   ]
// },
// {
//   featureType: "poi",
//   felementType: "geometry",
//   stylers: [
//     {
//       color: "#24a2ba"
//     }
//   ]
// },
// {
//   featureType: "poi",
//   felementType: "labels",
//   stylers: [
//     {
//       visibility: "off"
//     }
//   ]
// },
// {
//   featureType: "transit.station.airport",
//   felementType: "geometry",
//   stylers: [
//     {
//       color: "#2bb5c8"
//     }
//   ]
// },
// {
//   featureType: "transit.line",
//   felementType: "geometry",
//   stylers: [
//     {
//       color: "#2bb5c8"
//     }
//   ]
// },
// {
//   featureType: "road.highway",
//   felementType: "geometry",
//   stylers: [
//     {
//       color: "#31bccd"
//     }
//   ]
// },
// {
//   featureType: "road.arterial",
//   felementType: "geometry",
//   stylers: [
//     {
//       color: "#31bccd"
//     }
//   ]
// },
// {
//   featureType: "road.local",
//   felementType: "geometry",
//   stylers: [
//     {
//       color: "#31bccd"
//     }
//   ]
// }
// ]
