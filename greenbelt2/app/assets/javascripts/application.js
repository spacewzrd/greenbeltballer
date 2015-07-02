// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(30.241718, -97.800636),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        
        var icon = 'https://maps.google.com/mapfiles/ms/micons/';
        var greenBelt = new google.maps.LatLng(30.243615, -97.800312);
       

        var map = new google.maps.Map(mapCanvas, mapOptions)
        
        var marker1 = new google.maps.Marker({
      		position: greenBelt,
      		map: map,
      		title: 'Hello World!',
      		icon: icon + 'cabs.png'
  		});
  		var spyglass = new google.maps.LatLng(30.258414, -97.787845);
  		var marker2 = new google.maps.Marker({
      		position: spyglass,
      		map: map,
      		title: 'Hello World!',
      		icon: icon + 'cabs.png'
  		});
  		var zilker = new google.maps.LatLng(30.265263, -97.769261);
  		var marker2 = new google.maps.Marker({
      		position: zilker,
      		map: map,
      		title: 'Hello World!',
      		icon: icon + 'cabs.png'
  		});
  		var greenBeltswim = new google.maps.LatLng(30.245008, -97.79782);
  		var marker2 = new google.maps.Marker({
      		position: greenBeltswim,
      		map: map,
      		title: 'Hello World!',
      		icon: icon + 'swimming.png'
  		});
  		var spyglassswim = new google.maps.LatLng(30.257964, -97.7845);
  		var marker2 = new google.maps.Marker({
      		position: spyglassswim,
      		map: map,
      		title: 'Hello World!',
      		icon: icon + 'swimming.png'
  		});
  		var spyglasscave = new google.maps.LatLng(30.258939, -97.783777);
  		var marker2 = new google.maps.Marker({
      		position: spyglasscave,
      		map: map,
      		title: 'Hello World!',
      		icon: icon + 'hiker.png'
  		});




  		 map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
  			document.getElementById('legend'));
      }
  google.maps.event.addDomListener(window, 'load', initialize);   




 
