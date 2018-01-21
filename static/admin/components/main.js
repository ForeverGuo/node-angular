var app=angular.module('myapp',['ng','ngRoute'])
.config(function($routeProvider){
  $routeProvider
  .when('/config',{
      templateUrl :'template/config.html',
      controller : 'config'
  })
  .when('/user',{
      templateUrl:'template/user.html',
      controller : 'user'
  })
  .when('/user_modify',{
      templateUrl:'template/user_modify.html',
      controller:'user_modify'
  })
  .when('/user_add',{
	  templateUrl:'template/user_add.html',
	  controller:'user_add'
  })
  .when('/expostor',{
      templateUrl:"template/expostor.html",
      controller:'expostor'
  })
  .otherwise({
     redirectTo : '/config'
  })
})
  .controller('mycontroller',function($scope,$http,$window,$location){
        pathUrl = $location.path();
        //console.log(pathUrl);
        if($window.localStorage.getItem("key")===null){
            $window.location = "/admin";
        }
        $scope.selected = pathUrl;
        $scope.isSelected = function (index) {
            return $scope.selected === index;
        };
        $scope.setSelected = function (index) {
            $scope.selected = index;
        };
        $scope.logout = function(){
            $window.localStorage.removeItem("key");
        }
        $scope.userModify = function(){
            console.log("demo");
        }

  })

  .controller('config',function($scope,$http,$window,$location){
       app.config($scope,$http,$window,$location);

  })
  .controller('user',function($window,$scope,$http,$location){
       app.user($scope,$http,$window,$location);
  })
  .controller('user_modify',function($window,$scope,$http,$location){
       app.user_modify($scope,$http,$window,$location);
 })
  .controller('user_add',function($window,$scope,$http,$location){
	   app.user_add($scope,$http,$window,$location);
 })

 .controller('expostor',function($window,$scope,$http,$location){
 
 })





