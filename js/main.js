/* Google Maps API key */
/* AIzaSyCzofMQpm9GETEoAsfL6xlqkcvG9UixJ2M */
/* https://console.developers.google.com/apis/credentials?project=rare-theater-120212 */


/* https://developer.flightstats.com/admin/applications/1409612407690 */
/* app id: 49d8f9f7 */
/* api key: 6a006cd76f681ae7d926c7e51b4adf08 */


/* FlightAware API Key */
/* 11917c6bed5c9ba59cb414745683ac7821a22089 */


/*
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

*/

var airportsJSONGlobal = [
{airportID:'CYSN',
latLng: {
            lat: 43.191667,
            lng: -79.171111
        },
name:"St. Catharines/Niagara District Airport"},

{airportID:'CZBA',
latLng: {
            lat: 43.441389,
            lng: -79.850278
        },
name:"Burlington Air Park"},

{airportID:'CYYZ',
latLng: {
            lat: 43.676667,
            lng: -79.630556
        },
name:"Toronto Pearson International Airport"},

{airportID:'CYHM',
latLng: {
            lat: 43.173611,
            lng: -79.935
        },
name:"John C. Munro Hamilton International Airport"},

];



var AirportModel = function (data) {
	this.airportID = data.airportID;
	this.latLng= data.latLng;
	this.name = data.name;
	this.marker = null; // google maps marker
};


var ViewModel = function (map,airportsJSON) {
	// save the outer this to self
	var self = this;
	var googleMap = map;

	// array containing all airports
	self.allAirports = [];

	// add airports into an array
	airportsJSON.forEach(function(airportJSON) {
        self.allAirports.push(new AirportModel(airportJSON));
    });

	// add markers to each airport object
    self.allAirports.forEach(function(airport) {
        var markerOptions = {
            map: self.googleMap, // enable the marker by default
            position: airport.latLng, // specify the location
            animation: google.maps.Animation.DROP, // specify the marker animation
        };

        airport.marker = new google.maps.Marker(markerOptions);
    });



	// only airports that are visible
	self.visibleAirports = ko.observableArray();

	// add all the airports to the visible list of airports
	self.allAirports.forEach(function(airport) {
        self.visibleAirports.push(airport);
    });

	self.searchText = ko.observable('');

	// setup a subscription to when self.searchText changes value
	self.searchText.subscribe(function (newValue) {
		// triger an airport filter when this happens
   		self.filterAirports ();
	});


	self.filterAirports = function() {
		// take the user search text from the input box and convert it to lowercase for searching
        var searchInput = self.searchText().toLowerCase();

        // clear all visible airports so we can re-filter them next
        self.visibleAirports.removeAll();

        // filter all the airports to those that match the searchInput
        self.allAirports.forEach(function(airport) {
        	airport.marker.setMap(null);

           	// search in the full name and airport ID
           	var searchIn = airport.name.toLowerCase() + "(" + airport.airportID.toLowerCase() + ")";

            if (searchIn.indexOf(searchInput) !== -1) {
                self.visibleAirports.push(airport);
            }
        });

        // for visible airports, enable the marker
        self.visibleAirports().forEach(function(airport) {
           airport.marker.setMap(self.googleMap);
        });
    };


};



// initialize KnockoutJS
//ko.applyBindings( new ViewModel());


function initMap() {


  var myLatLng = {lat: 43.173611, lng: -79.935};



  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    //scrollwheel: false,
    zoom: 9
  });

/*
  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });
*/

  ko.applyBindings( new ViewModel(map,airportsJSONGlobal));
}







/*



function createMap() {
    return new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.166294,
            lng: -96.389016
        },
        zoom: 4
    });
}

google.maps.event.addDomListener(window, 'load', function() {


    var googleMap = createMap();

    ko.applyBindings( new ViewModel(googleMap,airportsJSONGlobal));

});


*/

