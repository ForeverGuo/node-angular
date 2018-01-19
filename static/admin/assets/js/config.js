$(document).ready(function(){

})

$("#xt_save").click(function(){
    xt_name = $("#xt_name").val();
    xt_rang = $("#xt_rang").val();
    xt_color = $("#xt_color").val();
    if (xt_name && xt_rang && xt_color) {
           $.ajax({
                  type: 'POST',
                  url: '/config', 
                  data: {
                        xt_name:xt_name,
                        xt_rang:xt_rang,
                        xt_color:xt_color
                  },
                  success: function (response) {
                     confirm("提交成功");
                     console.log(response);
                     //parent.location.reload();
                     clearData();
                  },
                  error: function (response) {
                      if (JSON.parse(response.responseText).code == 500) {
                          alert('服务器内部错误!');
                      } else {
                          alert('用户名或密码错误');
                      }
                      clearData();
                  }
              })
          }else{
              confirm('提交失败');
              clearData();
      }   

})
function clearData(){
    $("#xt_name").val('');
    $("#xt_rang").val('');
    $("#xt_color").val('');
}
