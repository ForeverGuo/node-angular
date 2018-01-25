app.expostor = function($scope,$http,$window,$location){
     expostor($scope,$http);
     $scope.expostor_del = function(name,imgSrc){
        $http({
            method:'POST',
            url:"/expostor_del",
            data:{"expostor_del_username":name,"expostor_del_img":imgSrc}
        }).
        success(function(data,status){
            confirm("删除成功！");
            parent.location.reload();
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
