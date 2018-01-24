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
  .when('/expostor_add',{
      templateUrl:"template/expostor_add.html",
      controller:"expostor_add"
  
  })
  .when('/expostor_modify',{
      templateUrl:"template/expostor_modify.html",
      controller:"expostor_modify"
 }) 
  .otherwise({
     redirectTo : '/config'
  })
})
  .controller('mycontroller',function($scope,$http,$window,$location){
        pathUrl = $location.path();
        beginUser($scope,$http,$window.localStorage.getItem("key"))
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
    app.expostor($scope,$http,$window,$location); 
 })

 .controller('expostor_add',function($window,$scope,$http,$location){
      app.expostor_add($scope,$http,$window,$location);
})
 .controller('expostor_modify',function($window,$scope,$http,$location){
      app.expostor_modify($scope,$http,$window,$location);
})



function beginUser($scope,$http,name){
    $http({
        method:"POST",
        url:"/beginUser",
        data:{"username":name}
    }). 
    success(function(data,status){
        $scope.beginUser = data;
        //console.log(data);
    }). 
    error(function(data,status){
    }); 
}


