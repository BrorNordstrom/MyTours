var contentString = null;
var currentInfowindow = null;
var marker = null;
function initMap() {
// The location of Uluru
var uluru = {lat: -25.344, lng: 131.036};
// The map, centered at Uluru
var map = new google.maps.Map(
    document.getElementById('map'), {
        zoom: 4.2, 
        center: {lat:35.665525, lng:-97.326554},
        disableDefaultUI: true,
        styles: [ // snazzymaps.com
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
        ]
    });
// The marker, positioned at Uluru
    var locations = [
        ['California', 35.665241, -120.325241, 4],
        ['Texas', 31.665525, -99.327395, 5],
        ['Oklahoma', 35.664570, -97.326176, 3]
    ];
    var infowindow = new google.maps.InfoWindow();
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: 'assets/images/pin.png'
        }); 
        
        // Content string that contains the information when pin is clicked
        contentString = '<div class="bg-white p-3 pr-4 d-inline-block">\n' +
            '              <div style="width: 200px; padding-right: 30px" class="position-relative">\n' +
            '                <div>\n' +
            '                  <div class="font-weight-bold mb-2">Los Angeles</div>\n' +
            '                  <div class="font-weight-bold mb-1  col-blue font-small">CALIFORNIEN</div>\n' +
            '                  <div class="description col-gray  font-weight-light font-small">\n' +
            '                    Oplev hovedstaden Los angeles i solstaten Californien.\n' +
            '                  </div>\n' +
            '                </div>\n' +
            '                <div class="vertical-center" style="left:unset">\n' +
            '                  <span class="col-red"><span class="fa fa-angle-right font-medium"></span></span>\n' +
            '                </div>\n' +
            '              </div>\n' +
            '            </div>';
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(contentString);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
    google.maps.event.addListener(map,'click',function (event) {
        if(infowindow!=null)
            infowindow.close();
    })


}

function menufix() {
    var scroll = $(window).scrollTop();

    if(scroll >= 100) {
        $("#main-menu").addClass("active");
    } else {
        $("#main-menu").removeClass("active");
    }
}

menufix();

$(window).scroll(function() {    
    menufix();
});