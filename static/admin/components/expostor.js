app.expostor = function($scope,$http,$window,$location){
     expostor($scope,$http);
     $scope.expostor_del = function(name){
        $http({
            method:'POST',
            url:"/user_del",
            data:{"user_del_username":name}
        }).
        success(function(data,status){
            confirm("删除成功！");
            user_del($scope,$http);            
        }).
        error(function(data,status){
            confirm("删除失败！");
        });

     }
      

}

function expostor($scope,$http){
    $http({
        method:"POST",
        url:"/expostor",
        data:{}
    }).
    success(function(data,status){
        $scope.expostor = data;
    }).
    error(function(data,status){
    });
}
