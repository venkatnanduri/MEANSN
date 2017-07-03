(fucntion(){
   angular.module('Time-Waste'['ui.router'])
   .config(function($stateProvider){
     $stateProvider
     .state('signUp', {
       url: "/signup",
       templateUrl: "app/signup/signup.html",
       controller: "signUpController"
     })
   })
}());
