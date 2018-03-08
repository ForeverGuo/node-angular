app.expostor_modify = function($scope,$http,$window,$location){
    $scope.username = $location.search().username;
    expostor($scope,$http,$scope.username);
    $scope.expostor_modify = function(){
         name = $('#expostor_modify_name').val();
         sex = $('#expostor_modify_sex').val();
         tel = $('#expostor_modify_tel').val();
         lange = $('#expostor_modify_lange').val();
         nbrang = $('#expostor_modify_nbrang').val();
         time = $('#expostor_modify_time').val();
         img = $('#expostor_modify_img img').attr('src');
         email = $('#expostor_modify_email').val();
         password = $('#expostor_modify_password').val();
         video = $('#expostor_modify_video audio').attr('src');
         if(name && sex && tel && lange && nbrang  && email && time && img && video){
         $http({
                 method: "POST",
                 url: "/expostor_modify",
                 data:{
                        "expostor_modify_id":$scope.username,
                        "expostor_modify_name":name,
                        "expostor_modify_sex":sex,
                        "expostor_modify_tel":tel,
                        "expostor_modify_email":email,
                        "expostor_modify_password":password,
                        "expostor_modify_lange":lange,
                        "expostor_modify_nbrang":nbrang,
                        "expostor_modify_time":time,
                        "expostor_modify_img":img,
                        "expostor_modify_video":video
                    }
                }).
                success(function(data, status) {
                    //$scope.status = status;
                    console.log(data,status);
                    confirm("修改成功");
                    $location.url("/expostor");
                }).
                error(function(data, status) {
                    confirm("修改失败");
                });
       }else{
            confirm("请把数据填写完全");
       }      
       
    } 

}

function expostor($scope,$http,name){
    $http({
        method:"POST",
        url:"/expostor_modify_befor",
        data:{"username":name}
    }). 
    success(function(data,status){
        $scope.expostor = data;
    }). 
    error(function(data,status){
    }); 
}

