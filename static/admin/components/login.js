/*
 * Created by Nealyang on 17/2/25.
 */
$(document).ready(function () {
    //设置一屏的宽高
    $('body').css({
        'height': $(window).height() + 'px',
        'width': $(window).width() + 'px'
    });
    // 点击登录
    $('#login_button').click(function () {
		sub();    
	});
});
document.onkeydown=function(){
    if (event.keyCode == 13){
         sub();
      }else{}
}
function sub(){
		
	username = $('#inputName').val(),
    password = $('#inputPassword').val();
    if (username && password) {
            $.ajax({
                type: 'POST',
                url: '/login',
                data: {
                    username: username,
                    password: password
                },
                success: function (response) {
                    console.log(response);
                    window.localStorage.setItem("key",username);
                    window.location.replace('./main.html');
                },
                error: function (response) {
                    if (JSON.parse(response.responseText).code == 500) {
                        alert('服务器内部错误!');
                    } else {
                        alert('用户名或密码错误');
                    }
                }
            })
        } else {
            confirm('用户名和密码为必填项~');
        }

}
