map=undefined;
mapOptions=undefined;
function initMap() {
  mapOptions = {
    zoom: 5,
    center: {lat: 22.422449,lng: 82.7879763},
    mapTypeId: 'hybrid',
    disableDefaultUI: true,
    draggable: false,
    scaleControl: false,
    scrollwheel: false,

      styles: [
        {
          "featureType": "landscape",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "poi",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "elementType": "labels",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "road",
          "stylers": [
            { "visibility": "off" }
          ]
        },
        {
          "featureType": 'administrative.province',
          "elementType": 'geometry.stroke',
          "stylers": [{"color": '#ffffff'},{"weight": 2}]
        },
        {
          "featureType": 'administrative.country',
          "elementType": 'geometry.stroke',
          "stylers": [{"color": '#ffffff'},{"weight": 2}]
        }
      ]
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var heatmapData = [
    {location: new google.maps.LatLng(22.422449, 82.7879763), weight: 0.1},
    {location: new google.maps.LatLng(8.6810793,77.2170903), weight: 0.5},
    {location: new google.maps.LatLng(22.424449, 82.7872763), weight: 0.5},
    {location: new google.maps.LatLng(11.9496612,75.8080913), weight: 0.2},
    {location: new google.maps.LatLng(22.432449, 82.7979763), weight: 0.2},
    {location: new google.maps.LatLng(22.522449, 82.7879263), weight: 0.2},
    {location: new google.maps.LatLng(12.9793842,78.1240443), weight: 0.2},
    {location: new google.maps.LatLng(22.422749, 82.8879763), weight: 0.2},
    {location: new google.maps.LatLng(21.422449, 81.7879763), weight: 0.2},
    {location: new google.maps.LatLng(22.411449, 82.7129763), weight: 0.2},
    {location: new google.maps.LatLng(20.490449, 82.7859763), weight: 0.2},
    {location: new google.maps.LatLng(21.422450, 82.9119763), weight: 0.2},
    {location: new google.maps.LatLng(22.423349, 82.8789763), weight: 0.8},
    {location: new google.maps.LatLng(21.455449, 82.9199763), weight: 0.6},
];
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 10
  });
  
  heatmap.setMap(map);
}
