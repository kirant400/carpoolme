angular.module('carPoolApp')
.factory('ionicReady', function($ionicPlatform) {
  var readyPromise;

  return function () {
    if (!readyPromise) {
      readyPromise = $ionicPlatform.ready();
    }
    return readyPromise;
  };
})
  .directive('googleMap', function(ionicReady) {
    return {
      restrict: 'A',
      scope: {
        mapReady: '&onMapReady'
      },
      link: function(scope, element) {
        function triggerMapReady(map) {
          scope.mapReady({map: map});
        }
        console.log('before Ready!!');
        ionicReady().then(function() {
          console.log('after Ready!!');
        var mapParams = {
          'mapType': plugin.google.maps.MapTypeId.ROADMAP,
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          }
        };

        var map = plugin.google.maps.Map.getMap(element[0], mapParams);
        map.on(plugin.google.maps.event.MAP_READY, triggerMapReady);
      });
      }
    };
  });