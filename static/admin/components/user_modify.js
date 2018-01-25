app.user_modify = function($scope,$http,$window,$location){
    $scope.username = $location.search().username;
    user_modify($scope,$http,$window,$scope.username);
    $scope.user_modify = function(){
         name = $location.search().username;  
         email = $('#user_modify_email').val();
         img = $('#user_modify_img img').attr("src");
         var data = JSON.parse(localStorage.getItem("data"));

         if((data[0].email == email) && ("../upload/"+data[0].headImage == img)){
            confirm("请修改后进行提交");
         }else{
            $http({
                 method: "POST",
                 url: "/user_modify",
                 data:{
                        "user_modify_name":name,
                        "user_modify_email":email,
                        "user_modify_img":img
                    }   
                }).
                success(function(data, status) {
                 //$scope.status = status;
                 confirm("修改成功");
				 $scope.users = data;
				 $location.url("/user");
                }).
                error(function(data, status) {
                //$scope.data = data || "Request failed";
                //$scope.status = status;
            }); 
       }
    }
    $scope.dataChange = function(){
        console.log("change");
    }

}

function user_modify($scope,$http,$window,name){
    
    $http({
        method:'POST',
        url:'/user_modify_befor',
        data:{"username":name}
    }).
    success(function(data,status){
        $scope.users = data;
        localStorage.setItem("data",JSON.stringify(data));
    }).
    error(function(data,status){
    
    })
}
