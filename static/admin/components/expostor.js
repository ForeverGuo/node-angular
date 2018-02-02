app.expostor = function($scope,$http,$window,$location){
     expostor($scope,$http);
     $scope.expostor_del = function(id,imgSrc){
        var msg = "确认要删除？";
       if(confirm(msg) == true){
        $http({
            method:'POST',
            url:"/expostor_del",
            data:{"expostor_del_id":id,"expostor_del_img":imgSrc}
        }).
        success(function(data,status){
            confirm("删除成功！");
            parent.location.reload();
        }).
        error(function(data,status){
            confirm("删除失败！");
        });
       }else{
            return false;
       }

     }
      

}

function expostor($scope,$http){
    $http({
        method:"POST",
        url:"/expostor",
        data:{}
    }).
    success(function(data,status){
        //console.log(data);
        $scope.expostor = data;
    }).
    error(function(data,status){
    });
}
