app.password = function($scope,$http,$window,$location){
         $scope.password_change = function(){
            var old_pass = $('#old_pass').val();
            var new_pass = $('#new_pass').val();
            var rnew_pass = $('#rnew_pass').val();
            if(new_pass != rnew_pass){
                confirm("两次密码不一致，请重新输入");
            }else{
                $http({
                    method:"POST",
                    url:"/rpassword",
                    data:{"old_pass":old_pass,"new_pass":new_pass}
                }).
                success(function(status,data){
                      confirm("修改成功"); 
                }).
                error(function(status,data){
                      confirm("修改失败，请重新修改");
                })
            }
         }                
}
