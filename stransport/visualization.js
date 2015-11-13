var map;

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 14.65197, lng: 121.0403776},
        zoom: 16
    });
    google.maps.event.addListenerOnce(map, "idle", configure);
    var mc = new MarkerClusterer(map);
}

function configure() {
    var markers = []
    $.getJSON("./stops.json", function(json1) {
        $.each(json1, function(key, data) {
            var latLng = new google.maps.LatLng(data.lat, data.lng);
            // Creating a marker and putting it on the map
            var marker = new google.maps.Marker({
                position: latLng,
                title: data.name + "//" + data.node_id,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 5
                },
            });
            markers.push(marker);
        });
        var markerCluster = new MarkerClusterer(map, markers);
    });
    var polylines = []
    $.getJSON("./connections.json", function(json2) {
        $.each(json2, function(key, route) {
            var coordinates = [];
            $.each(route.stops, function(idx, stop) {
                coordinates.push({
                    lat: parseFloat(stop.lat),
                    lng: parseFloat(stop.lng)
                })
            });
            var path = new google.maps.Polyline({
                path: coordinates,
                geodesic: true,
                strokeColor: route.color,
                strokeWeight: 2,
                strokeOpacity: 0.2
            });
            path.setMap(map);
            google.maps.event.addListener(path, 'mouseover', function(latlng) {
                path.setOptions({strokeOpacity: 1.0, strokeWeight: 4});
            });
            google.maps.event.addListener(path, 'mouseout', function(latlng) {
                path.setOptions({strokeOpacity: 0.5, strokeWeight: 2});
            });
        });
    });
}