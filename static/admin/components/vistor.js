app.vistor = function($scope,$http,$window,$location){
    vistor($scope,$http);    

}
function vistor($scope,$http){
    $http({
        method:"POST",
        url:"/vistor",
        data:{}
    }). 
    success(function(data,status){
        //console.log(data);
        $scope.vistor = data;
    }). 
    error(function(data,status){
    }); 
}

