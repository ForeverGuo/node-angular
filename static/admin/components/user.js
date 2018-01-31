app.user = function($scope,$http,$window,$location){
     user($scope,$http);
     $scope.user_del = function(name,imgSrc){
       
         var msg = "确认要删除？";
         if(confirm(msg)==true){
            $http({
                method:'POST',
                url:"/user_del",
                data:{"user_del_username":name,"user_del_img":imgSrc}
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

function user($scope,$http){
    $http({
        method:"POST",
        url:"/user",
        data:{}
    }).
    success(function(data,status){
        if(data.msg == "parameters error" || data.msg == "database error"){
            return ;
        }else{
            $scope.users = data;
        }
    }).
    error(function(data,status){
    });
}
