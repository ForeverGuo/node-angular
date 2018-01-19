var app=angular.module('myapp',['ng','ngRoute'])
.config(function($routeProvider){
  $routeProvider
  .when('/config',{
      templateUrl :'TPL/config.html',
      controller : 'config'
  })
  .when('/user',{
      templateUrl:'TPL/user.html',
      controller : 'user'
  })
  .when('/user_modify',{
      templateUrl:'TPL/user_modify.html',
      controller:'user_modify'
  })
  .when('/second',{
      templateUrl : 'TPL/second.html',
      controller : 'second',
  })
  .when('/third/:pid',{
      templateUrl : 'TPL/third.html',
      controller : 'third',
  })
  .when('/forth/:tid',{
     templateUrl : 'TPL/forth.html',
     controller :　'forth',
  })
  .when('/five',{
      templateUrl : 'TPL/five.html',
      controller : 'five',
  })
  .when('/six/:mid',{
      templateUrl : 'TPL/six.html',
      controller : 'six',
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
  .controller('config',function($scope,$window,$location){
      $scope.next=function(){
        $location.path('/config');
      }

  })
  .controller('second',function($scope,$http,$location){
      $scope.className = "active-menu";
      $http({medth:'get',url:'data/list.json'}).success(function(data){
        $scope.sub=data;
    })
      $scope.loading=function(){
        $http.get('data/list-o.json').success(function(data){
          $scope.sub=$scope.sub.concat(data);
        })
      }
  })
  .controller('third',function($scope,$http,$routeParams){
      $scope.gid=$routeParams.pid;
      $http.get('data/list.json').success(function(data){
          for(var i =0;i<data.length;i++){
            if($scope.gid==data[i].id){
              $scope.gname=data[i].name;
              $scope.gimg=data[i].img;
              $scope.gmaterial=data[i].material;
              $scope.gdetail=data[i].detail;
            }
          }

      });


  })
  .controller('forth',function($scope,$http,$routeParams){
      $scope.yid=$routeParams.tid;
      $http.get('data/list.json').success(function(data){
          for(var i =0;i<data.length;i++){
            if($scope.yid==data[i].id){
              $scope.yname=data[i].name;
              $scope.yimg=data[i].img;
              $scope.ymaterial=data[i].material;
              $scope.ydetail=data[i].detail;
              $scope.yidm=data[i].idm;
            }
          }

      });
      $scope.ding=function(){
          $scope.Switch=false;
      }
  })
  .controller('five',function($scope,$http,$routeParams){
      $scope.load=function(){
        $http.get('data/list -m.json').success(function(data){
          $scope.ming=$scope.ming.concat(data);
        })
      }
      $http({medth:'get',url:'data/list -m.json'}).success(function(data){
        $scope.ming=data;
    })
  })

  .controller('six',function($scope,$http,$routeParams){
        $scope.add=function(){
          /*
            $.ajax({
                type : 'POST',
                url : 'data/list -m.json',
                dataType : 'json',
                success:function(response,status,xhr){

                  ++response[6].number;

                }
            });
          */
        }

        $scope.sid=$routeParams.mid;
        $http.get('data/list -m.json').success(function(data){
            for(var i =0;i<data.length;i++){
              if($scope.sid==data[i].id){
                $scope.sname=data[i].name;
                $scope.simg=data[i].img;
                $scope.smaterial=data[i].material;
                $scope.sdetail=data[i].detail;
                $scope.sidm=data[i].idm;
                $scope.snumber=data[i].number;
              }
            }

        });

        $('.cf').click(function(){
            $('.zan').fadeIn('slow');
        }).mouseout(function(){
            $('.zan').hide();
        });


  })
  .controller('user',function($window,$scope,$http,$location){
        console.log("ajax");
      $http({
        method: "POST",
        url: "/user",
        data:{}
      }).
      success(function(data, status) {
       //$scope.status = status;
        console.log(data);
        $scope.users = data;
      }).
      error(function(data, status) {
       //$scope.data = data || "Request failed";
       //$scope.status = status;
     }); 
  })
  .controller('user_modify',function($window,$scope,$http,$location){
       $scope.username = $location.search().username;
        
       $scope.user_modify = function(){
             name = $location.search().username;  
             password = $('#user_modify_password').val();
             email = $('#user_modify_email').val();
            console.log(name);
            $http({
                 method: "POST",
                 url: "/user_modify",
                 data:{
                        "user_modify_name":name,
                        "user_modify_password":password,
                        "user_modify_email":email
                    }
                }). 
                success(function(data, status) {
                 //$scope.status = status;
                 console.log(data);
                 $scope.users = data;
                }). 
                error(function(data, status) {
                //$scope.data = data || "Request failed";
                //$scope.status = status;
         }); 
       } 
        



 })
