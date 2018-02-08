function initialize() {
    var Diamond = new google.maps.LatLng(21.270734,-157.803682)\
    var mapOptions = {
        zoom: 8,
        center: Diamond,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(
        document.getElementById("map_canvas"),
        mapOptions);
}
