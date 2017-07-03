(function(){
  angular.module('Time-Waste')
  .controller('NavigationController',['$scope','$http','$state',function('$scope','$http','$state'){
    $scope.logUserin = function(){
      $http.post('api/user/login',$scope.login).success(function(response){
          localStorage.setItem('User-Data',JSON.stringify(response));

      }).error(function(error){
          console.error(error);
      });
    }
  }]);
}());
