app.expostor_order = function($scope,$http,$window,$location){

}
function expostor_order($scope,$http){
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

