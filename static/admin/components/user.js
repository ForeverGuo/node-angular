app.user = function($scope,$http,$window,$location){
     user($scope,$http);
     $scope.user_del = function(name){
        $http({
            method:'POST',
            url:"/user_del",
            data:{"user_del_username":name}
        }).
        success(function(data,status){
            confirm("删除成功！");
        }).
        error(function(data,status){
            confirm("删除失败！");
        });

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
