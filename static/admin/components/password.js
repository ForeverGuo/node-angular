app.password = function($scope,$http,$window,$location){
         $scope.password_change = function(){
            var name = window.localStorage.getItem('key');
            var old_pass = $('#old_pass').val();
            var new_pass = $('#new_pass').val();
            var rnew_pass = $('#rnew_pass').val();
            if(old_pass && new_pass && rnew_pass){
            if(new_pass != rnew_pass){
                confirm("两次密码不一致，请重新输入");
            }else{
                $http({
                    method:"POST",
                    url:"/rpassword",
                    data:{"name":name,"old_pass":old_pass,"new_pass":new_pass}
                }).
                success(function(status,data){
                      console.log(data);
                      confirm("修改成功"); 
                }).
                error(function(status,data){
                      confirm("修改失败，请重新修改");
                })
            }
           }else{
                confirm("请填写后提交");
           }
         }                
}
