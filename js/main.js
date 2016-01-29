/* Google Maps API key */
/* AIzaSyCzofMQpm9GETEoAsfL6xlqkcvG9UixJ2M */
/* https://console.developers.google.com/apis/credentials?project=rare-theater-120212 */
/* https://developer.flightstats.com/admin/applications/1409612407690 */
/* app id: 49d8f9f7 */
/* api key: 6a006cd76f681ae7d926c7e51b4adf08 */
/* FlightAware API Key */
/* 11917c6bed5c9ba59cb414745683ac7821a22089 */
/* map icons came from */
/* Please credit: Maps Icons Collection https://mapicons.mapsmarker.com */
// define our neighbourhood box
/* top left 43.8, -79.9 */
/* bottom right 43.6, -79.1 */
var LAT_TOP = 43.8;
var LAT_BOTTOM = 43.6;
var LONG_LEFT = -79.9;
var LONG_RIGHT = -79.1;
var MAP_ZOOM = 11;
var MAP_ZOOMIN = 16;


/* larger version of the map  that uses all the airports imported in airportsJSONGlobal */
/* map top left 44.0, -80.7 */
/* bottom right 43.0, -78.7 */

/*
var LAT_TOP = 44.0;
var LAT_BOTTOM = 43.0;
var LONG_LEFT = -80.7;
var LONG_RIGHT = -78.7;
var MAP_ZOOM = 9;
*/

// define the center of the map
var mapCentre = {
    lat: (LAT_TOP + LAT_BOTTOM) / 2,
    lng: (LONG_LEFT + LONG_RIGHT) / 2
};

// maximum number of airplanes to display at once (costs money to query airplanes)
var MAX_AIRPLANES = 10;

// how many minutes ago must an airplane have reported in to use it's data
var LAST_X_MINUTES = 30;

var FXML_URL = 'http://fastkite:11917c6bed5c9ba59cb414745683ac7821a22089@flightxml.flightaware.com/json/FlightXML2/';

// list of airports in my area - these will be filtered based on the neighbourhood box defined earlier.  The full list of airports in the world was much too large to import here
var airportsJSONGlobal = [{
    airportID: '0G0',
    latLng: {
        lat: 43.10319900512695,
        lng: -78.70330047607422
    },
    name: 'North Buffalo Suburban Airport'
}, {
    airportID: '61NY',
    latLng: {
        lat: 43.168701171875,
        lng: -78.78230285644531
    },
    name: 'Bassett Field'
}, {
    airportID: '63NY',
    latLng: {
        lat: 43.261199951171875,
        lng: -78.96530151367188
    },
    name: 'Shear Airport'
}, {
    airportID: '72NY',
    latLng: {
        lat: 43.15370178222656,
        lng: -79.02999877929688
    },
    name: 'St Marys Heliport'
}, {
    airportID: '77NY',
    latLng: {
        lat: 43.082000732421875,
        lng: -78.77980041503906
    },
    name: 'Pendleton Airpark'
}, {
    airportID: '78NY',
    latLng: {
        lat: 43.055599212646484,
        lng: -78.81610107421875
    },
    name: 'Flying F Airport'
}, {
    airportID: '79NY',
    latLng: {
        lat: 43.08700180053711,
        lng: -78.8114013671875
    },
    name: 'Smith Airport'
}, {
    airportID: '85N',
    latLng: {
        lat: 43.266700744628906,
        lng: -78.7677993774414
    },
    name: 'Hollands International Field'
}, {
    airportID: '99NY',
    latLng: {
        lat: 43.2333984375,
        lng: -78.78730010986328
    },
    name: 'Hibbard\'s Airport'
}, {
    airportID: '',
    latLng: {
        lat: 43.843356522899995,
        lng: -79.5260703564
    },
    name: 'Maple Airport'
}, {
    airportID: '',
    latLng: {
        lat: 43.905799865722656,
        lng: -79.55960083007812
    },
    name: 'King City Airport'
}, {
    airportID: '',
    latLng: {
        lat: 43.88333511352539,
        lng: -80.53333282470703
    },
    name: 'Arthur North Airport'
}, {
    airportID: '',
    latLng: {
        lat: 43.0531475098,
        lng: -80.2761554718
    },
    name: 'Burtch Airport'
}, {
    airportID: '',
    latLng: {
        lat: 43.983333587646484,
        lng: -80.26667022705078
    },
    name: 'Grand Valley Airport'
}, {
    airportID: '',
    latLng: {
        lat: 43.900001525878906,
        lng: -80.01667022705078
    },
    name: 'Orangeville Airport'
}, {
    airportID: '',
    latLng: {
        lat: 44,
        lng: -79.63333129882812
    },
    name: 'Pottageville Airport'
}, {
    airportID: '',
    latLng: {
        lat: 43.3404490137,
        lng: -79.83305454250001
    },
    name: 'WESCAM Burlington'
}, {
    airportID: '',
    latLng: {
        lat: 43.7975530554,
        lng: -79.7895812988
    },
    name: 'Little\'s Farm'
}, {
    airportID: '',
    latLng: {
        lat: 43.3576842766,
        lng: -79.9830651283
    },
    name: 'Gamble Field'
}, {
    airportID: '',
    latLng: {
        lat: 43.7378792754,
        lng: -80.08428096770001
    },
    name: 'Brisbane'
}, {
    airportID: '',
    latLng: {
        lat: 43.3471211516,
        lng: -80.43365478519999
    },
    name: 'Roseville Field'
}, {
    airportID: '',
    latLng: {
        lat: 43.9155472592,
        lng: -79.13389921190002
    },
    name: 'Brougham (High Perspective Hang Glider Port)'
}, {
    airportID: '',
    latLng: {
        lat: 43.9765877574,
        lng: -78.706870079
    },
    name: 'Hampton'
}, {
    airportID: '',
    latLng: {
        lat: 43.982038338,
        lng: -78.81718397139998
    },
    name: 'Hampton / Morawetz Field'
}, {
    airportID: '',
    latLng: {
        lat: 43.8708588617,
        lng: -79.0118694305
    },
    name: 'Ajax / Picov Downs'
}, {
    airportID: '',
    latLng: {
        lat: 43.1022832509,
        lng: -79.87678527830002
    },
    name: 'Tyneside Field'
}, {
    airportID: '',
    latLng: {
        lat: 43.740833,
        lng: -79.422222
    },
    name: 'Armour Heights Field'
}, {
    airportID: '',
    latLng: {
        lat: 43.714666206299995,
        lng: -79.45590376850001
    },
    name: 'Barker Field'
}, {
    airportID: '',
    latLng: {
        lat: 43.6987669661,
        lng: -79.49644804
    },
    name: 'De Lesseps Field'
}, {
    airportID: '',
    latLng: {
        lat: 43.712778,
        lng: -79.359167
    },
    name: 'Leaside Aerodrome'
}, {
    airportID: '',
    latLng: {
        lat: 43.572975860599996,
        lng: -79.5534181595
    },
    name: 'Long Branch Aerodrome'
}, {
    airportID: '',
    latLng: {
        lat: 43.748889,
        lng: -79.460833
    },
    name: 'Toronto Aerodrome'
}, {
    airportID: '',
    latLng: {
        lat: 43.765221005899996,
        lng: -79.4237494469
    },
    name: 'Willowdale Airfield'
}, {
    airportID: '',
    latLng: {
        lat: 43.9686657666,
        lng: -79.40330028530002
    },
    name: 'Foxden Farms'
}, {
    airportID: '',
    latLng: {
        lat: 43.3715992057,
        lng: -79.93238210679999
    },
    name: 'Charlie\'s Field'
}, {
    airportID: '',
    latLng: {
        lat: 43.3018169655,
        lng: -79.971832037
    },
    name: 'Skydive SWOOP'
}, {
    airportID: 'CAR5',
    latLng: {
        lat: 43.7827292694,
        lng: -80.4329252243
    },
    name: 'Arthur (Arthur South)'
}, {
    airportID: 'CAY5',
    latLng: {
        lat: 43.3058333333,
        lng: -80.49916666670002
    },
    name: 'Ayr/Sargeant Private Airfield'
}, {
    airportID: 'CBE3',
    latLng: {
        lat: 43.186552790200004,
        lng: -79.47424471379999
    },
    name: 'Beamsville/Panterra Heliport'
}, {
    airportID: 'CBF2',
    latLng: {
        lat: 43.808333333,
        lng: -80.3119444444
    },
    name: 'Belwood (Baird Field)'
}, {
    airportID: 'CBW6',
    latLng: {
        lat: 43.793888889,
        lng: -80.4025
    },
    name: 'Belwood (Wright Field)'
}, {
    airportID: 'CEF2',
    latLng: {
        lat: 43.837235430599996,
        lng: -80.3694534302
    },
    name: 'Belwood (Ellen Field)'
}, {
    airportID: 'CGV2',
    latLng: {
        lat: 43.976388889,
        lng: -80.38527778
    },
    name: 'Grand Valley / Luther Field'
}, {
    airportID: '',
    latLng: {
        lat: 43.962501525878906,
        lng: -80.35416412353516
    },
    name: 'Grand Valley North'
}, {
    airportID: 'CGV4',
    latLng: {
        lat: 43.8621028127,
        lng: -80.26692867279999
    },
    name: 'Grand Valley (Madill Field)'
}, {
    airportID: 'CGV5',
    latLng: {
        lat: 43.8600915245,
        lng: -80.28868675230001
    },
    name: 'Grand Valley (Black Field)'
}, {
    airportID: 'CGV6',
    latLng: {
        lat: 43.8748961118,
        lng: -80.2824425697
    },
    name: 'Grand Valley (Martin Field)'
}, {
    airportID: 'CHP2',
    latLng: {
        lat: 43.7722,
        lng: -80.3739
    },
    name: 'Heurisko Pond Water Aerodrome'
}, {
    airportID: 'CLB2',
    latLng: {
        lat: 43.3058333,
        lng: -80.5486111
    },
    name: 'Plattsville (Lubitz Flying Field)'
}, {
    airportID: 'CLW3',
    latLng: {
        lat: 43.9791679382,
        lng: -80.1772232056
    },
    name: 'Laurel / Whittington'
}, {
    airportID: 'CMH2',
    latLng: {
        lat: 43.532223736400006,
        lng: -79.9027343094
    },
    name: 'Milton (Afi) Heliport'
}, {
    airportID: 'CMZ2',
    latLng: {
        lat: 43.8105555556,
        lng: -80.4358333333
    },
    name: 'Arthur (Metz Field)'
}, {
    airportID: 'CNB2',
    latLng: {
        lat: 43.8521607791,
        lng: -79.6948215365
    },
    name: 'Bolton Heliport'
}, {
    airportID: 'CNC3',
    latLng: {
        lat: 43.7602996826,
        lng: -79.875
    },
    name: 'Brampton Airport'
}, {
    airportID: 'CNC4',
    latLng: {
        lat: 43.563899993896484,
        lng: -80.19609832763672
    },
    name: 'Guelph Airport'
}, {
    airportID: 'CNC6',
    latLng: {
        lat: 43.08610153198242,
        lng: -80.05169677734375
    },
    name: 'Caledonia/Grand River Seaplane Base'
}, {
    airportID: 'CNK9',
    latLng: {
        lat: 43.4528857925,
        lng: -80.503719449
    },
    name: 'Kitchener-Waterloo (Grand River Hospital) Heliport'
}, {
    airportID: 'CNT6',
    latLng: {
        lat: 43.58470153808594,
        lng: -80.60310363769531
    },
    name: 'Elmira Airport'
}, {
    airportID: 'CNU8',
    latLng: {
        lat: 43.93579864501953,
        lng: -79.26219940185547
    },
    name: 'Markham Airport'
}, {
    airportID: 'CNW8',
    latLng: {
        lat: 43.6568464507,
        lng: -79.3878802657
    },
    name: 'Toronto (Hospital For Sick Children) Heliport'
}, {
    airportID: 'CNY8',
    latLng: {
        lat: 43.7212999835,
        lng: -79.37076509
    },
    name: 'Toronto (Sunnybrook Medical Centre) Heliport'
}, {
    airportID: 'CNZ6',
    latLng: {
        lat: 43.64440155029297,
        lng: -79.93440246582031
    },
    name: 'Georgetown (Georgetown & District Hospital) Heliport'
}, {
    airportID: 'CNZ8',
    latLng: {
        lat: 43.15999984741211,
        lng: -79.59919738769531
    },
    name: 'Grimsby Airpark'
}, {
    airportID: 'COB4',
    latLng: {
        lat: 43.8745094139,
        lng: -80.1798963547
    },
    name: 'Orangeville / Brundle Field'
}, {
    airportID: 'COL2',
    latLng: {
        lat: 43.916900634799994,
        lng: -80.20580291750001
    },
    name: 'Orangeville / Laurel Airstrip'
}, {
    airportID: 'CPA5',
    latLng: {
        lat: 43.6539083949,
        lng: -79.65785399079999
    },
    name: 'Tarten Heliport'
}, {
    airportID: 'CPB2',
    latLng: {
        lat: 43.7214899523,
        lng: -80.37602752450002
    },
    name: 'Fergus (Groves Memorial Community Hospital) Heliport'
}, {
    airportID: 'CPC3',
    latLng: {
        lat: 43.840578507,
        lng: -80.44288158420001
    },
    name: 'Arthur (Walter\'s Field)'
}, {
    airportID: 'CPC4',
    latLng: {
        lat: 43.833112432,
        lng: -79.70222041010001
    },
    name: 'Brampton (National D) Heliport'
}, {
    airportID: 'CPE2',
    latLng: {
        lat: 43.835887893400006,
        lng: -79.0173760056
    },
    name: 'Ajax (Pickering General Hospital) Heliport'
}, {
    airportID: 'CPE4',
    latLng: {
        lat: 43.442730692299996,
        lng: -80.23251056670001
    },
    name: 'Cambridge / Reid\'s Field'
}, {
    airportID: 'CPE8',
    latLng: {
        lat: 43.4740804079,
        lng: -79.67159360650001
    },
    name: 'Oakville (Trafalgar Memorial Hospital) Heliport'
}, {
    airportID: 'CPF6',
    latLng: {
        lat: 43.1696925259,
        lng: -79.7094154358
    },
    name: 'Stoney Creek Airport'
}, {
    airportID: 'CPG4',
    latLng: {
        lat: 43.59189987182617,
        lng: -80.51219940185547
    },
    name: 'Elmira (East) Airport'
}, {
    airportID: 'CPG7',
    latLng: {
        lat: 43.73500061035156,
        lng: -80.44719696044922
    },
    name: 'Fergus (Juergensen Field) Airport'
}, {
    airportID: 'CPH7',
    latLng: {
        lat: 43.8851011299,
        lng: -79.2305901647
    },
    name: 'Markham Stouffville Heliport'
}, {
    airportID: 'CPJ3',
    latLng: {
        lat: 43.2659885521,
        lng: -79.9289220572
    },
    name: 'Hamilton (Chedoke-McMaster Hospital) Heliport'
}, {
    airportID: 'CPK3',
    latLng: {
        lat: 43.26191223279999,
        lng: -79.85472545030001
    },
    name: 'Hamilton (General Hospital) Heliport'
}, {
    airportID: 'CPK6',
    latLng: {
        lat: 43.5614123982,
        lng: -79.70273673530001
    },
    name: 'Toronto (Mississauga Credit Valley Hospital) Heliport'
}, {
    airportID: 'CPK9',
    latLng: {
        lat: 43.7715431648,
        lng: -80.4835224152
    },
    name: 'Arthur (Peskett Field)'
}, {
    airportID: 'CPL8',
    latLng: {
        lat: 43.6312723974,
        lng: -79.6647030115
    },
    name: 'Cardinal Couriers Heliport'
}, {
    airportID: 'CPM2',
    latLng: {
        lat: 43.8115796,
        lng: -79.6984398365
    },
    name: 'Brampton (National P) Heliport'
}, {
    airportID: 'CPM5',
    latLng: {
        lat: 43.9913325082,
        lng: -79.7811698914
    },
    name: 'Volk Airport'
}, {
    airportID: 'CPP6',
    latLng: {
        lat: 43.037498474121094,
        lng: -79.85250091552734
    },
    name: 'York Airport'
}, {
    airportID: 'CPQ3',
    latLng: {
        lat: 43.1190603068,
        lng: -79.0753144026
    },
    name: 'Niagara Falls Heliport'
}, {
    airportID: 'CPR9',
    latLng: {
        lat: 43.74175499689999,
        lng: -80.38620114330001
    },
    name: 'Fergus (Royland Field)'
}, {
    airportID: 'CPS7',
    latLng: {
        lat: 43.775385719199996,
        lng: -80.22806882859999
    },
    name: 'Orton / Smith Field'
}, {
    airportID: 'CPT3',
    latLng: {
        lat: 43.322200775146484,
        lng: -80.17639923095703
    },
    name: 'Rockton Airport'
}, {
    airportID: 'CPV2',
    latLng: {
        lat: 43.9585990906,
        lng: -80.1549987793
    },
    name: 'Orangeville / Murray Wesley Kot Field'
}, {
    airportID: 'CPW3',
    latLng: {
        lat: 43.93669891357422,
        lng: -79.67970275878906
    },
    name: 'Nobleton Airport'
}, {
    airportID: 'CPY2',
    latLng: {
        lat: 43.4958882862,
        lng: -79.86969083550001
    },
    name: 'Milton (District Hospital) Heliport'
}, {
    airportID: 'CPY5',
    latLng: {
        lat: 43.617781271199995,
        lng: -79.5639659464
    },
    name: 'Wilson\'s Heliport'
}, {
    airportID: 'CPY9',
    latLng: {
        lat: 43.728611111,
        lng: -80.28305555559999
    },
    name: 'Fergus (Holyoake Airfield)'
}, {
    airportID: 'CPZ9',
    latLng: {
        lat: 43.63309860229492,
        lng: -79.39440155029297
    },
    name: 'Toronto/City Centre Seaplane Base'
}, {
    airportID: 'CRE3',
    latLng: {
        lat: 43.06437305189999,
        lng: -80.69835662839999
    },
    name: 'Curries (Rand Private Airfield)'
}, {
    airportID: 'CSV8',
    latLng: {
        lat: 43.986145243799996,
        lng: -79.72728967670001
    },
    name: 'Schomberg (Sloan Valley View Farm Airfield)'
}, {
    airportID: 'CTM4',
    latLng: {
        lat: 43.654152915,
        lng: -79.37847107650002
    },
    name: 'Toronto (St. Michael\'s Hospital) Heliport'
}, {
    airportID: 'CVF2',
    latLng: {
        lat: 43.7232733033,
        lng: -80.28937339779999
    },
    name: 'Fergus (Vodarek Field)'
}, {
    airportID: 'CYFD',
    latLng: {
        lat: 43.13140106201172,
        lng: -80.34249877929688
    },
    name: 'Brantford Municipal Airport'
}, {
    airportID: 'CYHM',
    latLng: {
        lat: 43.173599243199995,
        lng: -79.93499755859999
    },
    name: 'John C. Munro Hamilton International Airport'
}, {
    airportID: 'CYKF',
    latLng: {
        lat: 43.460800170899994,
        lng: -80.3786010742
    },
    name: 'Waterloo Airport'
}, {
    airportID: 'CYKZ',
    latLng: {
        lat: 43.86220169067383,
        lng: -79.37000274658203
    },
    name: 'Buttonville Municipal Airport'
}, {
    airportID: 'CYOO',
    latLng: {
        lat: 43.9227981567,
        lng: -78.8949966431
    },
    name: 'Oshawa Airport'
}, {
    airportID: 'CYSN',
    latLng: {
        lat: 43.19169998168945,
        lng: -79.17169952392578
    },
    name: 'Niagara District Airport'
}, {
    airportID: 'CYTZ',
    latLng: {
        lat: 43.6274986267,
        lng: -79.3962020874
    },
    name: 'Billy Bishop Toronto City Centre Airport'
}, {
    airportID: 'CYYZ',
    latLng: {
        lat: 43.6772003174,
        lng: -79.63059997559999
    },
    name: 'Lester B. Pearson International Airport'
}, {
    airportID: 'CYZD',
    latLng: {
        lat: 43.74250030517578,
        lng: -79.4655990600586
    },
    name: 'Downsview Airport'
}, {
    airportID: 'CZBA',
    latLng: {
        lat: 43.4414531515,
        lng: -79.850102663
    },
    name: 'Burlington Executive'
}, {
    airportID: 'D80',
    latLng: {
        lat: 43.320899963378906,
        lng: -78.72889709472656
    },
    name: 'Olcott-Newfane Airport'
}, {
    airportID: 'KIAG',
    latLng: {
        lat: 43.1072998046875,
        lng: -78.94619750976562
    },
    name: 'Niagara Falls International Airport'
}, {
    airportID: 'NK25',
    latLng: {
        lat: 43.21590042114258,
        lng: -78.80840301513672
    },
    name: 'Cambria Airport'
}, {
    airportID: 'NK57',
    latLng: {
        lat: 43.11949920654297,
        lng: -78.93589782714844
    },
    name: 'Ross Heliport'
}, {
    airportID: 'NK77',
    latLng: {
        lat: 43.09389877319336,
        lng: -79.05120086669922
    },
    name: 'Niagara Falls Memorial Parking Ramp Heliport'
}, {
    airportID: 'NK80',
    latLng: {
        lat: 43.08890151977539,
        lng: -79.06230163574219
    },
    name: 'Rainbow Air Heliport'
}, {
    airportID: 'NY24',
    latLng: {
        lat: 43.12779998779297,
        lng: -78.97000122070312
    },
    name: 'Taylor Johnson Airport'
}, {
    airportID: 'NY41',
    latLng: {
        lat: 43.072601318359375,
        lng: -78.98529815673828
    },
    name: 'Best Western Red Jacket Inn Heliport'
}, {
    airportID: 'CMB5',
    latLng: {
        lat: 43.431667,
        lng: -80.025333
    },
    name: 'Campbellville (Bellshill Airpark)'
}, ];

// seconds since 1970 - time used in FlightAware
function seconds_since_epoch() {
    return Math.floor(Date.now() / 1000);
}


// model of what is included in an airport
var AirportModel = function(data) {
    this.latLng = data.latLng;
    this.displayname = data.name;
    if (data.airportID !== "") {
        this.displayname = this.displayname + " (" + data.airportID + ")";
    }
    this.marker = null; // google maps marker
};

// model of what is included in an airplane
var AirplaneModel = function(data) {
    this.ident = data.ident;
    this.fl = data.altitude;
    this.origin = data.origin;
    this.destination = data.destination;


    this.latLng = {
        lat: data.latitude,
        lng: data.longitude
    };
    this.type = data.type;
    this.heading = data.heading;
    this.groundspeed = data.groundspeed;
    this.altitudeStatus = data.altitudeStatus;
    this.marker = null; // google maps marker
};




var ViewModel = function(map, airportsJSON) {
    // save the outer this to self
    var self = this;



    self.googleMap = map;

    // define a marker for airplanes
    self.airplaneImage = {
        url: 'mapicons/airport.png',
        // This marker is 32 pixels wide by 37 pixels high.
        size: new google.maps.Size(32, 37),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the pin.
        anchor: new google.maps.Point(16, 37)
    };

    // define a marker for airports
    self.airportImage = {
        url: 'mapicons/airport_terminal.png',
        // This marker is 32 pixels wide by 37 pixels high.
        size: new google.maps.Size(32, 37),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the pin.
        anchor: new google.maps.Point(16, 37)
    };
    // define the shape of a marker (clickable area)
    self.markerShape = {
        coords: [29, 0, 30, 1, 31, 2, 31, 3, 31, 4, 31, 5, 31, 6, 31, 7, 31, 8, 31, 9, 31, 10, 31, 11, 31, 12, 31, 13, 31, 14, 31, 15, 31, 16, 31, 17, 31, 18, 31, 19, 31, 20, 31, 21, 31, 22, 31, 23, 31, 24, 31, 25, 31, 26, 31, 27, 31, 28, 31, 29, 30, 30, 29, 31, 23, 32, 22, 33, 21, 34, 20, 35, 19, 36, 12, 36, 11, 35, 10, 34, 9, 33, 8, 32, 2, 31, 1, 30, 0, 29, 0, 28, 0, 27, 0, 26, 0, 25, 0, 24, 0, 23, 0, 22, 0, 21, 0, 20, 0, 19, 0, 18, 0, 17, 0, 16, 0, 15, 0, 14, 0, 13, 0, 12, 0, 11, 0, 10, 0, 9, 0, 8, 0, 7, 0, 6, 0, 5, 0, 4, 0, 3, 0, 2, 1, 1, 2, 0, 29, 0],
        type: 'poly'
    };




    // array containing all airports
    self.allAirports = [];



    // add airports into an array
    airportsJSON.forEach(function(airportJSON) {
        // only add airpots in our neighbourhood box
        if ((airportJSON.latLng.lng <= LONG_RIGHT) && (airportJSON.latLng.lng >= LONG_LEFT) && (airportJSON.latLng.lat <= LAT_TOP) && (airportJSON.latLng.lat >= LAT_BOTTOM)) {
            self.allAirports.push(new AirportModel(airportJSON));
        }
    });


    // add markers to each airport object
    self.allAirports.forEach(function(airport) {
        var markerOptions = {
            map: self.googleMap, // enable the marker by default
            position: airport.latLng, // specify the location
            animation: google.maps.Animation.DROP, // specify the marker animation

            label: '',
            icon: self.airportImage, // use custom icon
            shape: self.shape,

        };


        // create info window content
        var infowindow = new google.maps.InfoWindow({
            content: airport.displayname
        });

        // add marker to airport
        airport.marker = new google.maps.Marker(markerOptions);
        airport.launchinfo = function() {
            infowindow.open(self.googleMap, airport.marker);
            // cause the icon th bounce when clicked
            airport.marker.setAnimation(google.maps.Animation.Lr);

            // we will create a callback to try and zoom out if the zoom level is 'zoomed in'
            google.maps.event.addListener(infowindow,'closeclick',function(){
                // only if we are zoomed in
                if (self.googleMap.zoom == MAP_ZOOMIN) {
                    // return zoom level
                    self.googleMap.setZoom(MAP_ZOOM);
                    // put the list back on the screen
                    self.clickO();
                };

            });

        };
        // add click event to marker an associate it with the info window
        airport.marker.addListener('click', airport.launchinfo);
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
    self.searchText.subscribe(function(newValue) {
        // triger an airport filter when this happens
        self.filterAirports();
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
            var searchIn = airport.displayname.toLowerCase();

            if (searchIn.indexOf(searchInput) !== -1) {
                self.visibleAirports.push(airport);
            }
        });

        // for visible airports, enable the marker
        self.visibleAirports().forEach(function(airport) {
            airport.marker.setMap(self.googleMap);
        });
    };



    // property with all the airplanes in it
    self.allAirplanes = [];


    var t = seconds_since_epoch();
    t = t - (LAST_X_MINUTES * 60); // reported last X minutes


    $.ajax({
        type: 'GET',
        //  http://flightaware.com/commercial/flightxml/explorer search for: SearchBirdseyeInFlight
        url: FXML_URL + 'SearchBirdseyeInFlight',

        // {range lat x1 x2} {range lon y1 y2} query a specific box for airplanes range of lat and long
        // {> lastPositionTime t} — Time when last reported position was received, or 0 if no position has been received yet. Epoch timestamp seconds since 1970.
        // {true inAir} will verify that the airplane is still reported as in the air and not landed

        data: {
            'query': '{range lat ' + LAT_BOTTOM + ' ' + LAT_TOP + '} {range lon ' + LONG_LEFT + ' ' + LONG_RIGHT + '} {true inAir} {> lastPositionTime ' + t + '} {> alt 0}',
            'howMany': MAX_AIRPLANES,
            'offset': 0
        },

        success: function(result) {
            if (result.error) {
                alert('Failed to fetch flight: ' + result.error);
                return;
            }

            // get the sults from the query and display to the console since FLightAware does not have a good definition for the object returned
            //console.dir (result);


            var aircrafts = result.SearchBirdseyeInFlightResult.aircraft;


            aircrafts.forEach(function(aircraft) {

                self.allAirplanes.push(new AirplaneModel(aircraft));
            });

            self.displayAirplanes();
            if (self.allAirplanes.length === 0) {
                alert('Did not find any matching flights');
            }
        },
        error: function(data, text) {
            alert('Failed to fetch flight: ' + data);
        },
        dataType: 'jsonp',
        jsonp: 'jsonp_callback',
        xhrFields: {
            withCredentials: true
        }
    });




    self.displayAirplanes = function() {
        self.allAirplanes.forEach(function(airplane) {

            //console.log(airplane.ident  );
            //console.dir(airplane)
            //console.log (airplane.latLng.lat + ' ' + airplane.latLng.lng);

            var markerOptions = {
                map: self.googleMap, // enable the marker by default
                position: airplane.latLng, // specify the location
                animation: google.maps.Animation.DROP, // specify the marker animation
                label: '',
                icon: self.airplaneImage,
                shape: self.shape,
            };

            // prepare the english text for the altitude
            var altitudeText = '';
            if (airplane.altitudeStatus == '-') {
                altitudeText = 'Level at ';
            } else if (airplane.altitudeStatus == 'C') {
                altitudeText = 'Climbing through ';
            } else if (airplane.altitudeStatus == 'D') {
                altitudeText = 'Descending through ';
            } else {
                altitudeText = 'Unknown status "' + airplane.altitudeStatus + '" at ';
            }
            altitudeText = altitudeText + ' FL' + airplane.fl;

            // prepare the infoContent when you click on an airplane
            var infoContent = 'Flight ' + airplane.ident + '</br>' + altitudeText + '</br>' + 'From ' + airplane.origin + ' to ' + airplane.destination + '</br>' + 'Speed ' + airplane.groundspeed + ' kts heading ' + airplane.heading + ' degrees';

            // create info window content
            var infowindow = new google.maps.InfoWindow({
                content: infoContent
            });

            // add marker to airport
            airplane.marker = new google.maps.Marker(markerOptions);

            // click a launchinfo functino which we will store in the airplane object for access later if needed
            airplane.launchinfo = function() {
                infowindow.open(self.googleMap, airplane.marker);

            };

            // add click event to marker an associate it with the info window
            airplane.marker.addListener('click', airplane.launchinfo);
        });
    };


    // Create a click handler function (helps keep things clean)
    self.clickEvent = function(airport) {
        self.clickX ();

        // Zoom in a bit
        self.googleMap.setZoom(MAP_ZOOMIN);

        // Pan to coordinates
        self.googleMap.panTo(airport.latLng);

        // Open the Info Window
        airport.launchinfo();


    };



    self.clickX = function () {
        console.log('click-x');
        $('#hamburger-x').css('display', 'none');
        $('#hamburger-o').css('display', 'flex');
        $('.airport').css('display', 'none');
    };

    self.clickO = function () {
        console.log('click-o');
        $('#hamburger-o').css('display', 'none');
        $('#hamburger-x').css('display', 'flex');
        $('.airport').css('display', 'block');
    };
};




// function called once the page is ready
function initApp() {

    var map;
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: mapCentre,
        zoom: MAP_ZOOM
    });


    // initialize KnockoutJS
    ko.applyBindings(new ViewModel(map, airportsJSONGlobal));
}
