app.user_add = function($scope,$http,$window,$location){
    $scope.user_add = function(){
             name = $('#user_add_username').val();  
	         password = $('#user_add_password').val();
             email = $('#user_add_email').val();
             img = $('#user_add_img img').attr('src');
      if(name && password && email && img){
            $http({
                 method: "POST",
                 url: "/user_add",
                 data:{
                        "user_add_username":name,
			            "user_add_password":password,
                        "user_add_email":email,
                        "user_add_img":img
                    }   
                }).
                success(function(data, status) {
                 //$scope.status = status;
                 confirm("添加成功");
				 $location.url("/user");
                }).
                error(function(data, status) {
                                
             }); 
       }else{
        confirm("请填写完全");
    }
  }  

}
