      
app.person = function($scope,$http,$location,$window){
    $scope.user = window.localStorage.getItem("key");
    person($scope,$http,$scope.user); 
    
}

function person($scope,$http,name){
   $http({
        method: "POST",
        url: "/beginUser",
        data:{"username":name}
      }).
      success(function(data, status) {
            $scope.person = data;
      }).
      error(function(data, status) {
     });  

}
