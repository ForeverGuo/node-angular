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
  .when('/person',{
      templateUrl:"template/person.html",
      controller:"person"
  }) 
  .when('/home',{
      templateUrl:"template/home.html",
      controller:"home"
  }) 
  .when('/password',{
      templateUrl:"template/password.html",
      controller:"password"
  }) 
  .otherwise({
     redirectTo : '/home'
  })
})
  .controller('mycontroller',function($scope,$http,$window,$location){
        pathUrl = $location.path();
        var user = $window.localStorage.getItem("key");
        beginUser($scope,$http,user);

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
 .controller('person',function($window,$scope,$http,$location){
      app.person($scope,$http,$window,$location);
})
 .controller('home',function($window,$scope,$http,$location){
})
 .controller('password',function($window,$scope,$http,$location){
      app.password($scope,$http,$window,$location);
})

function beginUser($scope,$http,name){
    $http({
        method:"POST",
        url:"/beginUser",
        data:{"username":name}
    }). 
    success(function(data,status){
        $scope.beginUser = data;
        $scope.type_id = data[0].role;
        if($scope.type_id == "1"){
            $scope.person = true;
            $scope.password = true;
        }else{
            $scope.user = true;
            $scope.expostor = true;
            $scope.config = true;
        }
        $http({
            method:"POST",
            url:"/userType",
            data:{"type":data[0].role}
        }).
        success(function(data,status){
           $scope.type = data[0].desc; 
        }).
        error(function(data,status){
        
        });

    }). 
    error(function(data,status){
    }); 
}


