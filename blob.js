map = undefined;
mapOptions = undefined;
iCity = {};
markers = [];
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://dd5af69e-a7f7-4952-af44-0c61ec28a729.mock.pstmn.io/v1/data/team",
  "dataType": 'json',
  "method": "GET",
  "headers": {
    "Content-Type": "application/json",
    "cache-control": "no-cache",
    "Postman-Token": "53ca41e0-6c05-427e-a6f9-c8fac32c1e05"
  },
  "processData": false
}

function getUserInfo() {
  $.ajax(settings).done(function (response) {
    console.log(response);
    iCity.draw(response);
  })
  setTimeout(function () {
    deleteMarkers()
    getUserInfo()
  }, 1000 * 60 * 15)
}

function deleteMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
};

function initMap() {
  mapOptions = {
    zoom: 12.8,
    center: {lat: 18.646102,lng: 73.7948403},
    mapTypeId: 'roadmap',
    disableDefaultUI: false,
    draggable: false,
    scaleControl: false,
    scrollwheel: false,

    styles: [
      {
        "featureType": "landscape",
        "stylers": [
          { "visibility": "off" }
        ]
      }, {
        "featureType": "poi",
        "stylers": [
          { "visibility": "off" }
        ]
      }, {
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      }, {
        "featureType": "road",
        "stylers": [
          { "visibility": "off" }
        ]
      }
    ]
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var gradient = ['rgb(255,215,0)', 'rgb(255,165,0)'];
  getUserInfo();
}
heatmapData = [];

iCity.draw = function (locations) {

  heatmapData = locations.data.team.map((city, index) => {

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(city.latitude, city.longitude),
      map: map,
      user: city.user,
      address: city.address,
      time: city.created_at
    })
    var infowindow = new google.maps.InfoWindow({
      content: "asdasd",
      maxWidth: 200
    });

    marker.addListener('mouseover', function () {
      infoWindowContent = `<div><img src= "/Users/ishawakankar/Downloads/colony.png" style="height: 5vh"/>
      <h4 class="google-map-tooltip">${this.user}</h4><b>Visited at: </b>${this.time}<br/><br/>&nbsp;&nbsp;<button>${this.address}</button></div>`
      console.log(this)
      infowindow.setContent(infoWindowContent)
      infowindow.open(map, this);
    });

    marker.addListener('mouseout', function () {
      infowindow.close();
    });
    markers.push(marker)

    return true;

  })

}
