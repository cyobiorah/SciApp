angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopup) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  var comment = {
    message: '',
    rating: 5
  };
  $scope.comment = angular.copy(comment);

  $scope.openComments = function() {
    $ionicModal.fromTemplateUrl('templates/comments.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  };

  $scope.cancelComments = function() {
    $scope.comment = angular.copy(comment);
    $scope.modal.hide();
  }

  $scope.sendComments = function() {
    $scope.cancelComments();
    $ionicPopup.alert({
        title: 'Thank you!',
        template: 'We appreciate your comments!',
        okText: 'Close'
    });
  };

  //Cleanup the modal whrn we're done with it!
  $scope.$on('destroy', function() {
    if ($scope.modal) {
      $scope.modal.remove();
    }
  });

  /*
  * When ready for API
  * Write in API call in this controller
  */

});
