/* Google Maps API key */
/* AIzaSyCzofMQpm9GETEoAsfL6xlqkcvG9UixJ2M */
/* https://console.developers.google.com/apis/credentials?project=rare-theater-120212 */



var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
