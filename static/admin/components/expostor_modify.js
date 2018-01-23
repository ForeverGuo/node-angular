app.expostor_modify = function($scope,$http,$window,$location){
    $scope.username = $location.search().username;
    expostor($scope,$http,$scope.username);
    $scope.expostor_modify = function(){
         name = $location.search().username;  
         email = $('#user_modify_email').val();
        // console.log(name);
         $http({
                 method: "POST",
                 url: "/user_modify",
                 data:{
                        "user_modify_name":name,
                        "user_modify_email":email
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

function expostor($scope,$http,name){
    $http({
        method:"POST",
        url:"/expostor_modify",
        data:{"username":name}
    }). 
    success(function(data,status){
        $scope.expostor = data;
        console.log(data);
    }). 
    error(function(data,status){
    }); 
}

