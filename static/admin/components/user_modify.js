app.user_modify = function($scope,$http,$window,$location){
    $scope.username = $location.search().username;
    $scope.user_modify = function(){
             name = $location.search().username;  
             password = $('#user_modify_password').val();
             email = $('#user_modify_email').val();
            console.log(name);
            $http({
                 method: "POST",
                 url: "/user_modify",
                 data:{
                        "user_modify_name":name,
                        "user_modify_password":password,
                        "user_modify_email":email
                    }   
                }).
                success(function(data, status) {
                 //$scope.status = status;
                 console.log(data);
                 $scope.users = data;
                }).
                error(function(data, status) {
                //$scope.data = data || "Request failed";
                //$scope.status = status;
         }); 
       } 


}
