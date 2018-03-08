app.expostor = function($scope,$http,$window,$location){
    $scope.imgSrc = '../admin/assets/img/pause.png';
     expostor($scope,$http);
     $scope.expostor_del = function(id,imgSrc,videoSrc){
        var msg = "确认要删除？";
       if(confirm(msg) == true){
        $http({
            method:'POST',
            url:"/expostor_del",
            data:{"expostor_del_id":id,"expostor_del_img":imgSrc,"expostor_del_video":videoSrc}
        }).
        success(function(data,status){
            confirm("删除成功！");
            parent.location.reload();
        }).
        error(function(data,status){
            confirm("删除失败！");
        });
       }else{
            return false;
       }

     }
    
    $scope.music = function(musicUrl,$event){
        var audio = document.getElementById('audioId');
        if($event.target.src =='http://127.0.0.1:8000/admin/assets/img/pause.png'){
            if(audio.paused){
            }else{
                angular.forEach($scope.expostor,function(data){
                    document.getElementById(data.id).src = '../admin/assets/img/pause.png';
                })
            }
                
            $event.target.src = '../admin/assets/img/play.png';
            audio.src = musicUrl;
            audio.play();
        }else{
            $event.target.src = '../admin/assets/img/pause.png';
            audio.pause();
        }
    }
      
}

function expostor($scope,$http){
    $http({
        method:"POST",
        url:"/expostor",
        data:{}
    }).
    success(function(data,status){
        //console.log(data);
        $scope.expostor = data;
    }).
    error(function(data,status){
    });
}
