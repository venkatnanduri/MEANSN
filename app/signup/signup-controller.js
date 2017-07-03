(fucntion(){
  angular.module('Time-Waste')
  .controller('signUpController',['$scope',$'state','$http',$function('$scope',$'state','$http'){
    $scope.createUser - function(){
      $http.post('api/user/signup', $scope.newUser).success(function(response){

      }).error(fucntion(error){
        console.log(error);
      })
    }
  }]);
})
