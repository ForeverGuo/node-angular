app.user_add = function($scope,$http,$window,$location){
    $scope.user_add = function(){
             name = $('#user_add_username').val();  
	     password = $('#user_add_password').val();
             email = $('#user_add_email').val();
            console.log(name);
            $http({
                 method: "POST",
                 url: "/user_add",
                 data:{
                        "user_add_username":name,
			"user_add_password":password,
                        "user_add_email":email
                    }   
                }).
                success(function(data, status) {
                 //$scope.status = status;
                 confirm("添加成功");
				 $location.url("/user");
                }).
                error(function(data, status) {
                //$scope.data = data || "Request failed";
                //$scope.status = status;
         }); 
       } 


}
