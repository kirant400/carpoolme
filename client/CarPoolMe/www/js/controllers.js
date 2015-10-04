var mymap,mysearchmap;
angular.module('carPoolApp.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.onMapInit = function(map) {
    mymap = map;
    map.getMyLocation(function(location){
      map.animateCamera({
      'target': location.latLng,
      'tilt': 60,
      'zoom': 18,
      'bearing': 140,
      'duration': 10000
    });
    }, function(msg){
      alert("error: " + msg);
    });
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  $scope.onPoolMapInit = function(map) {
    mysearchmap = map;
    map.getMyLocation(function(location){
      map.animateCamera({
      'target': location.latLng,
      'tilt': 60,
      'zoom': 18,
      'bearing': 140,
      'duration': 10000
    });
    }, function(msg){
      alert("error: " + msg);
    });
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $cordovaCamera, $cordovaFile) {
  $scope.settings = {
    enableLocation: true
  };
  $scope.images = [];
 
    $scope.addImage = function() {
        console.log("add image");
    }
 
    $scope.urlForImage = function(imageName) {
        console.log("get correct path for image");
    }
});
