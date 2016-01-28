/* Google Maps API key */
/* AIzaSyCzofMQpm9GETEoAsfL6xlqkcvG9UixJ2M */
/* https://console.developers.google.com/apis/credentials?project=rare-theater-120212 */


/* https://developer.flightstats.com/admin/applications/1409612407690 */
/* app id: 49d8f9f7 */
/* api key: 6a006cd76f681ae7d926c7e51b4adf08 */


/* FlightAware API Key */
/* 11917c6bed5c9ba59cb414745683ac7821a22089 */


/* map top left 44.0, -80.7 */
/* bottom right 43.0, -78.7 */
/* map center 43.5, -79.7 */



var airportsJSONGlobal = [
{airportID:'0G0', latLng: {lat: 43.10319900512695, lng: -78.70330047607422}, name:'North Buffalo Suburban Airport'},
{airportID:'61NY', latLng: {lat: 43.168701171875, lng: -78.78230285644531}, name:'Bassett Field'},
{airportID:'63NY', latLng: {lat: 43.261199951171875, lng: -78.96530151367188}, name:'Shear Airport'},
{airportID:'72NY', latLng: {lat: 43.15370178222656, lng: -79.02999877929688}, name:'St Marys Heliport'},
{airportID:'77NY', latLng: {lat: 43.082000732421875, lng: -78.77980041503906}, name:'Pendleton Airpark'},
{airportID:'78NY', latLng: {lat: 43.055599212646484, lng: -78.81610107421875}, name:'Flying F Airport'},
{airportID:'79NY', latLng: {lat: 43.08700180053711, lng: -78.8114013671875}, name:'Smith Airport'},
{airportID:'85N', latLng: {lat: 43.266700744628906, lng: -78.7677993774414}, name:'Hollands International Field'},
{airportID:'99NY', latLng: {lat: 43.2333984375, lng: -78.78730010986328}, name:'Hibbard\'s Airport'},
{airportID:'', latLng: {lat: 43.843356522899995, lng: -79.5260703564}, name:'Maple Airport'},
{airportID:'', latLng: {lat: 43.905799865722656, lng: -79.55960083007812}, name:'King City Airport'},
{airportID:'', latLng: {lat: 43.88333511352539, lng: -80.53333282470703}, name:'Arthur North Airport'},
{airportID:'', latLng: {lat: 43.0531475098, lng: -80.2761554718}, name:'Burtch Airport'},
{airportID:'', latLng: {lat: 43.983333587646484, lng: -80.26667022705078}, name:'Grand Valley Airport'},
{airportID:'', latLng: {lat: 43.900001525878906, lng: -80.01667022705078}, name:'Orangeville Airport'},
{airportID:'', latLng: {lat: 44, lng: -79.63333129882812}, name:'Pottageville Airport'},
{airportID:'', latLng: {lat: 43.3404490137, lng: -79.83305454250001}, name:'WESCAM Burlington'},
{airportID:'', latLng: {lat: 43.7975530554, lng: -79.7895812988}, name:'Little\'s Farm'},
{airportID:'', latLng: {lat: 43.3576842766, lng: -79.9830651283}, name:'Gamble Field'},
{airportID:'', latLng: {lat: 43.7378792754, lng: -80.08428096770001}, name:'Brisbane'},
{airportID:'', latLng: {lat: 43.3471211516, lng: -80.43365478519999}, name:'Roseville Field'},
{airportID:'', latLng: {lat: 43.9155472592, lng: -79.13389921190002}, name:'Brougham (High Perspective Hang Glider Port)'},
{airportID:'', latLng: {lat: 43.9765877574, lng: -78.706870079}, name:'Hampton'},
{airportID:'', latLng: {lat: 43.982038338, lng: -78.81718397139998}, name:'Hampton / Morawetz Field'},
{airportID:'', latLng: {lat: 43.8708588617, lng: -79.0118694305}, name:'Ajax / Picov Downs'},
{airportID:'', latLng: {lat: 43.1022832509, lng: -79.87678527830002}, name:'Tyneside Field'},
{airportID:'', latLng: {lat: 43.740833, lng: -79.422222}, name:'Armour Heights Field'},
{airportID:'', latLng: {lat: 43.714666206299995, lng: -79.45590376850001}, name:'Barker Field'},
{airportID:'', latLng: {lat: 43.6987669661, lng: -79.49644804}, name:'De Lesseps Field'},
{airportID:'', latLng: {lat: 43.712778, lng: -79.359167}, name:'Leaside Aerodrome'},
{airportID:'', latLng: {lat: 43.572975860599996, lng: -79.5534181595}, name:'Long Branch Aerodrome'},
{airportID:'', latLng: {lat: 43.748889, lng: -79.460833}, name:'Toronto Aerodrome'},
{airportID:'', latLng: {lat: 43.765221005899996, lng: -79.4237494469}, name:'Willowdale Airfield'},
{airportID:'', latLng: {lat: 43.9686657666, lng: -79.40330028530002}, name:'Foxden Farms'},
{airportID:'', latLng: {lat: 43.3715992057, lng: -79.93238210679999}, name:'Charlie\'s Field'},
{airportID:'', latLng: {lat: 43.3018169655, lng: -79.971832037}, name:'Skydive SWOOP'},
{airportID:'CAR5', latLng: {lat: 43.7827292694, lng: -80.4329252243}, name:'Arthur (Arthur South)'},
{airportID:'CAY5', latLng: {lat: 43.3058333333, lng: -80.49916666670002}, name:'Ayr/Sargeant Private Airfield'},
{airportID:'CBE3', latLng: {lat: 43.186552790200004, lng: -79.47424471379999}, name:'Beamsville/Panterra Heliport'},
{airportID:'CBF2', latLng: {lat: 43.808333333, lng: -80.3119444444}, name:'Belwood (Baird Field)'},
{airportID:'CBW6', latLng: {lat: 43.793888889, lng: -80.4025}, name:'Belwood (Wright Field)'},
{airportID:'CEF2', latLng: {lat: 43.837235430599996, lng: -80.3694534302}, name:'Belwood (Ellen Field)'},
{airportID:'CGV2', latLng: {lat: 43.976388889, lng: -80.38527778}, name:'Grand Valley / Luther Field'},
{airportID:'', latLng: {lat: 43.962501525878906, lng: -80.35416412353516}, name:'Grand Valley North'},
{airportID:'CGV4', latLng: {lat: 43.8621028127, lng: -80.26692867279999}, name:'Grand Valley (Madill Field)'},
{airportID:'CGV5', latLng: {lat: 43.8600915245, lng: -80.28868675230001}, name:'Grand Valley (Black Field)'},
{airportID:'CGV6', latLng: {lat: 43.8748961118, lng: -80.2824425697}, name:'Grand Valley (Martin Field)'},
{airportID:'CHP2', latLng: {lat: 43.7722, lng: -80.3739}, name:'Heurisko Pond Water Aerodrome'},
{airportID:'CLB2', latLng: {lat: 43.3058333, lng: -80.5486111}, name:'Plattsville (Lubitz Flying Field)'},
{airportID:'CLW3', latLng: {lat: 43.9791679382, lng: -80.1772232056}, name:'Laurel / Whittington'},
{airportID:'CMH2', latLng: {lat: 43.532223736400006, lng: -79.9027343094}, name:'Milton (Afi) Heliport'},
{airportID:'CMZ2', latLng: {lat: 43.8105555556, lng: -80.4358333333}, name:'Arthur (Metz Field)'},
{airportID:'CNB2', latLng: {lat: 43.8521607791, lng: -79.6948215365}, name:'Bolton Heliport'},
{airportID:'CNC3', latLng: {lat: 43.7602996826, lng: -79.875}, name:'Brampton Airport'},
{airportID:'CNC4', latLng: {lat: 43.563899993896484, lng: -80.19609832763672}, name:'Guelph Airport'},
{airportID:'CNC6', latLng: {lat: 43.08610153198242, lng: -80.05169677734375}, name:'Caledonia/Grand River Seaplane Base'},
{airportID:'CNK9', latLng: {lat: 43.4528857925, lng: -80.503719449}, name:'Kitchener-Waterloo (Grand River Hospital) Heliport'},
{airportID:'CNT6', latLng: {lat: 43.58470153808594, lng: -80.60310363769531}, name:'Elmira Airport'},
{airportID:'CNU8', latLng: {lat: 43.93579864501953, lng: -79.26219940185547}, name:'Markham Airport'},
{airportID:'CNW8', latLng: {lat: 43.6568464507, lng: -79.3878802657}, name:'Toronto (Hospital For Sick Children) Heliport'},
{airportID:'CNY8', latLng: {lat: 43.7212999835, lng: -79.37076509}, name:'Toronto (Sunnybrook Medical Centre) Heliport'},
{airportID:'CNZ6', latLng: {lat: 43.64440155029297, lng: -79.93440246582031}, name:'Georgetown (Georgetown & District Hospital) Heliport'},
{airportID:'CNZ8', latLng: {lat: 43.15999984741211, lng: -79.59919738769531}, name:'Grimsby Airpark'},
{airportID:'COB4', latLng: {lat: 43.8745094139, lng: -80.1798963547}, name:'Orangeville / Brundle Field'},
{airportID:'COL2', latLng: {lat: 43.916900634799994, lng: -80.20580291750001}, name:'Orangeville / Laurel Airstrip'},
{airportID:'CPA5', latLng: {lat: 43.6539083949, lng: -79.65785399079999}, name:'Tarten Heliport'},
{airportID:'CPB2', latLng: {lat: 43.7214899523, lng: -80.37602752450002}, name:'Fergus (Groves Memorial Community Hospital) Heliport'},
{airportID:'CPC3', latLng: {lat: 43.840578507, lng: -80.44288158420001}, name:'Arthur (Walter\'s Field)'},
{airportID:'CPC4', latLng: {lat: 43.833112432, lng: -79.70222041010001}, name:'Brampton (National D) Heliport'},
{airportID:'CPE2', latLng: {lat: 43.835887893400006, lng: -79.0173760056}, name:'Ajax (Pickering General Hospital) Heliport'},
{airportID:'CPE4', latLng: {lat: 43.442730692299996, lng: -80.23251056670001}, name:'Cambridge / Reid\'s Field'},
{airportID:'CPE8', latLng: {lat: 43.4740804079, lng: -79.67159360650001}, name:'Oakville (Trafalgar Memorial Hospital) Heliport'},
{airportID:'CPF6', latLng: {lat: 43.1696925259, lng: -79.7094154358}, name:'Stoney Creek Airport'},
{airportID:'CPG4', latLng: {lat: 43.59189987182617, lng: -80.51219940185547}, name:'Elmira (East) Airport'},
{airportID:'CPG7', latLng: {lat: 43.73500061035156, lng: -80.44719696044922}, name:'Fergus (Juergensen Field) Airport'},
{airportID:'CPH7', latLng: {lat: 43.8851011299, lng: -79.2305901647}, name:'Markham Stouffville Heliport'},
{airportID:'CPJ3', latLng: {lat: 43.2659885521, lng: -79.9289220572}, name:'Hamilton (Chedoke-McMaster Hospital) Heliport'},
{airportID:'CPK3', latLng: {lat: 43.26191223279999, lng: -79.85472545030001}, name:'Hamilton (General Hospital) Heliport'},
{airportID:'CPK6', latLng: {lat: 43.5614123982, lng: -79.70273673530001}, name:'Toronto (Mississauga Credit Valley Hospital) Heliport'},
{airportID:'CPK9', latLng: {lat: 43.7715431648, lng: -80.4835224152}, name:'Arthur (Peskett Field)'},
{airportID:'CPL8', latLng: {lat: 43.6312723974, lng: -79.6647030115}, name:'Cardinal Couriers Heliport'},
{airportID:'CPM2', latLng: {lat: 43.8115796, lng: -79.6984398365}, name:'Brampton (National P) Heliport'},
{airportID:'CPM5', latLng: {lat: 43.9913325082, lng: -79.7811698914}, name:'Volk Airport'},
{airportID:'CPP6', latLng: {lat: 43.037498474121094, lng: -79.85250091552734}, name:'York Airport'},
{airportID:'CPQ3', latLng: {lat: 43.1190603068, lng: -79.0753144026}, name:'Niagara Falls Heliport'},
{airportID:'CPR9', latLng: {lat: 43.74175499689999, lng: -80.38620114330001}, name:'Fergus (Royland Field)'},
{airportID:'CPS7', latLng: {lat: 43.775385719199996, lng: -80.22806882859999}, name:'Orton / Smith Field'},
{airportID:'CPT3', latLng: {lat: 43.322200775146484, lng: -80.17639923095703}, name:'Rockton Airport'},
{airportID:'CPV2', latLng: {lat: 43.9585990906, lng: -80.1549987793}, name:'Orangeville / Murray Wesley Kot Field'},
{airportID:'CPW3', latLng: {lat: 43.93669891357422, lng: -79.67970275878906}, name:'Nobleton Airport'},
{airportID:'CPY2', latLng: {lat: 43.4958882862, lng: -79.86969083550001}, name:'Milton (District Hospital) Heliport'},
{airportID:'CPY5', latLng: {lat: 43.617781271199995, lng: -79.5639659464}, name:'Wilson\'s Heliport'},
{airportID:'CPY9', latLng: {lat: 43.728611111, lng: -80.28305555559999}, name:'Fergus (Holyoake Airfield)'},
{airportID:'CPZ9', latLng: {lat: 43.63309860229492, lng: -79.39440155029297}, name:'Toronto/City Centre Seaplane Base'},
{airportID:'CRE3', latLng: {lat: 43.06437305189999, lng: -80.69835662839999}, name:'Curries (Rand Private Airfield)'},
{airportID:'CSV8', latLng: {lat: 43.986145243799996, lng: -79.72728967670001}, name:'Schomberg (Sloan Valley View Farm Airfield)'},
{airportID:'CTM4', latLng: {lat: 43.654152915, lng: -79.37847107650002}, name:'Toronto (St. Michael\'s Hospital) Heliport'},
{airportID:'CVF2', latLng: {lat: 43.7232733033, lng: -80.28937339779999}, name:'Fergus (Vodarek Field)'},
{airportID:'CYFD', latLng: {lat: 43.13140106201172, lng: -80.34249877929688}, name:'Brantford Municipal Airport'},
{airportID:'CYHM', latLng: {lat: 43.173599243199995, lng: -79.93499755859999}, name:'John C. Munro Hamilton International Airport'},
{airportID:'CYKF', latLng: {lat: 43.460800170899994, lng: -80.3786010742}, name:'Waterloo Airport'},
{airportID:'CYKZ', latLng: {lat: 43.86220169067383, lng: -79.37000274658203}, name:'Buttonville Municipal Airport'},
{airportID:'CYOO', latLng: {lat: 43.9227981567, lng: -78.8949966431}, name:'Oshawa Airport'},
{airportID:'CYSN', latLng: {lat: 43.19169998168945, lng: -79.17169952392578}, name:'Niagara District Airport'},
{airportID:'CYTZ', latLng: {lat: 43.6274986267, lng: -79.3962020874}, name:'Billy Bishop Toronto City Centre Airport'},
{airportID:'CYYZ', latLng: {lat: 43.6772003174, lng: -79.63059997559999}, name:'Lester B. Pearson International Airport'},
{airportID:'CYZD', latLng: {lat: 43.74250030517578, lng: -79.4655990600586}, name:'Downsview Airport'},
{airportID:'CZBA', latLng: {lat: 43.4414531515, lng: -79.850102663}, name:'Burlington Executive'},
{airportID:'D80', latLng: {lat: 43.320899963378906, lng: -78.72889709472656}, name:'Olcott-Newfane Airport'},
{airportID:'KIAG', latLng: {lat: 43.1072998046875, lng: -78.94619750976562}, name:'Niagara Falls International Airport'},
{airportID:'NK25', latLng: {lat: 43.21590042114258, lng: -78.80840301513672}, name:'Cambria Airport'},
{airportID:'NK57', latLng: {lat: 43.11949920654297, lng: -78.93589782714844}, name:'Ross Heliport'},
{airportID:'NK77', latLng: {lat: 43.09389877319336, lng: -79.05120086669922}, name:'Niagara Falls Memorial Parking Ramp Heliport'},
{airportID:'NK80', latLng: {lat: 43.08890151977539, lng: -79.06230163574219}, name:'Rainbow Air Heliport'},
{airportID:'NY24', latLng: {lat: 43.12779998779297, lng: -78.97000122070312}, name:'Taylor Johnson Airport'},
{airportID:'NY41', latLng: {lat: 43.072601318359375, lng: -78.98529815673828}, name:'Best Western Red Jacket Inn Heliport'},
{airportID:'CMB5', latLng: {lat: 43.431667, lng: -80.025333}, name:'Campbellville (Bellshill Airpark)'},
];




var AirportModel = function (data) {
	this.airportID = data.airportID;
	this.latLng= data.latLng;
	this.name = data.name;
	this.listName = data.name;
	if (data.airportID != "") {
		this.listName = this.listName + " (" + data.airportID + ")"
	}
	this.marker = null; // google maps marker
};

var AirplaneModel = function (data) {
	this.ident = data.ident;
	this.origin = data.origin;
	this.destination = data.destination;
	this.latLng= {lat: data.latitude, lng: data.longitude};
	this.type = data.type;
	this.heading = data.heading;
	this.marker = null; // google maps marker
};




var ViewModel = function (map, airportsJSON) {
	// save the outer this to self
	var self = this;
	self.googleMap = map;


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
            //title: airport.listName,

        };

        // create info window content
		var infowindow = new google.maps.InfoWindow({
    		content: airport.listName
  		});

		// add marker to airport
        airport.marker = new google.maps.Marker(markerOptions);

        // add click event to marker an associate it with the info window
        airport.marker.addListener('click', function() {
    		infowindow.open(self.googleMap, airport.marker);
  		});
    });


	// only airports that are visible
	self.visibleAirports = ko.observableArray();

	// add all the airports to the visible list of airports
	self.allAirports.forEach(function(airport) {
        self.visibleAirports.push(airport);
    });


    // create observable for the text entered during search
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
           	var searchIn = airport.listName.toLowerCase();

            if (searchIn.indexOf(searchInput) !== -1) {
                self.visibleAirports.push(airport);
            }
        });

        // for visible airports, enable the marker
        self.visibleAirports().forEach(function(airport) {
           airport.marker.setMap(self.googleMap);
        });
    };




	self.allAirplanes =[];

	var fxml_url = 'http://fastkite:11917c6bed5c9ba59cb414745683ac7821a22089@flightxml.flightaware.com/json/FlightXML2/';

    $.ajax({
        type: 'GET',
        url: fxml_url + 'SearchBirdseyeInFlight',
        data: { 'query': '{range lat 43.0 44.0} {range lon -80.7 -78.7}', 'howMany': 2, 'offset': 0 },
        success : function(result) {
            if (result.error) {
                alert('Failed to fetch flight: ' + result.error);
                return;
            }
            console.log (result);
            console.dir (result);

            var aircrafts = result.SearchBirdseyeInFlightResult.aircraft;

            for (aircraft in aircrafts) {
            	self.allAirplanes.push(new AirplaneModel(aircrafts[aircraft]));
            }
            self.displayAirplanes();
            //alert('Did not find any useful flights');
        },
        error: function(data, text) { alert('Failed to fetch flight: ' + data); },
        dataType: 'jsonp',
        jsonp: 'jsonp_callback',
        xhrFields: { withCredentials: true }
        });



 var image = {
    url: 'img/beachflag.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };

    self.displayAirplanes = function () {
	    self.allAirplanes.forEach(function(airplane) {
	        var markerOptions = {
	            map: self.googleMap, // enable the marker by default
	            position: airplane.latLng, // specify the location
	            animation: google.maps.Animation.DROP, // specify the marker animation
	            //title: airport.listName,
	            label: '',

	            icon: image,
      shape: shape,

	        };

	        // create info window content
			var infowindow = new google.maps.InfoWindow({
	    		content: airplane.ident
	  		});

			// add marker to airport
	        airplane.marker = new google.maps.Marker(markerOptions);

	        // add click event to marker an associate it with the info window
	        airplane.marker.addListener('click', function() {
	    		infowindow.open(self.googleMap, airplane.marker);
	  		});
	    });
    }


};






function initMap() {

	var mapCentre = {lat: 43.5, lng: -79.7};

  	// Create a map object and specify the DOM element for display.
  	var map = new google.maps.Map(document.getElementById('map'), {
    	center: mapCentre,
    	//scrollwheel: false,
    	zoom: 9
  	});

	// initialize KnockoutJS
	ko.applyBindings( new ViewModel(map,airportsJSONGlobal));
}




