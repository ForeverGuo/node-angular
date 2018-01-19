app.user = function($scope,$http,$window,$location){
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

}
