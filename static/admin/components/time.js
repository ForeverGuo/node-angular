app.time = function($scope,$http,$window,$location){
    time($scope,$http);    

}
function time($scope,$http){
    $http({
        method:"POST",
        url:"/time",
        data:{}
    }). 
    success(function(data,status){
        //console.log(data);
        $scope.time = data;
    }). 
    error(function(data,status){
    }); 
}

