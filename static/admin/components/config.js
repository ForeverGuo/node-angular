      
app.config = function($scope,$http,$location,$window){
    xt_config($scope,$http); 
    $scope.next=function(){
          $location.path('/config');
     }
    
     $scope.xt_save = function(){
          xt_name = $("#xt_name").val();
          xt_rang = $("#xt_rang").val();
          xt_color = $("#xt_color").val();
        if (xt_name && xt_rang && xt_color) {
           $http({
                  method: 'POST',
                  url: '/config', 
                  data: {
                        xt_name:xt_name,
                        xt_rang:xt_rang,
                        xt_color:xt_color
                  }
                }).  
                  success(function (response) {
                     confirm("提交成功");
                     //console.log(response);
                  }).
                  error(function (response) {
                      if (JSON.parse(response.responseText).code == 500) {
                          alert('服务器内部错误!');
                      } else {
                          alert('用户名或密码错误');
                      }
                  });
              
          }else{
              confirm('提交失败');
        }
 
     }
}

function xt_config($scope,$http){
   $http({
        method: "POST",
        url: "/config/content",
        data:{}
      }).
      success(function(data, status) {
        $scope.config_content = data;
      }).
      error(function(data, status) {
     });  

}
