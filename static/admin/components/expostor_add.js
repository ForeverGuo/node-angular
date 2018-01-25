app.expostor_add = function($scope,$http,$window,$location){
    $scope.expostor_add = function(){
         name = $('#expostor_add_name').val();
         sex = $('#expostor_add_sex').val();
         tel = $('#expostor_add_tel').val();
         lange = $('#expostor_add_lange').val();
         nbrang = $('#expostor_add_nbrang').val();
         wbrang = $('#expostor_add_wbrang').val();
         server = $('#expostor_add_servers').val();
         time = $('#expostor_add_time').val();
         img = $('#expostor_add_img img').attr('src');
         if(name && sex && tel && lange && nbrang && wbrang && server && time && img){
         $http({
                 method: "POST",
                 url: "/expostor_add",
                 data:{
                        "expostor_add_name":name,
                        "expostor_add_sex":sex,
                        "expostor_add_tel":tel,
                        "expostor_add_lange":lange,
                        "expostor_add_nbrang":nbrang,
                        "expostor_add_wbrang":wbrang,
                        "expostor_add_server":server,
                        "expostor_add_time":time,
                        "expostor_add_img":img
                    }   
                }).
                success(function(data, status) {
                    //$scope.status = status;
                    console.log(data,status);
                    confirm("添加成功");
                    $location.url("/expostor");
                }).
                error(function(data, status) {
                    confirm("添加失败");
                }); 
       }else{
            confirm("请把数据填写完全");
       }
  }     


}
