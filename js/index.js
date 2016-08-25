var sHeight = document.querySelector('.a').clientHeight;
//获取一屏的高度，判断该移动多少
var sLength = document.querySelectorAll('.section').length;
//判断有几屏页面
var sIndex = 0;//标记当前第几页
var sScroll = false;//滚动时就不再触发事件，防止误点
var main = document.querySelector('.main'); //需要移动的DOM
window.onmousewheel = function(e){
    //PC端的滚轮事件，嗯不兼容火狐
    if(!sScroll){
        if(e.wheelDelta>0){
            //上一页
            if(sIndex == 0){return; }
            sIndex--;
            scrollTo(sIndex);
        }else{
            //下一页
            if(sIndex == sLength-1){return;}
            sIndex++;
            scrollTo(sIndex);
        }
    }
}

function scrollTo(i){
    //操作动画的函数
    sScroll = true;
    main.style.top = -i*sHeight + 'px';
    setTimeout(function(){sScroll = false}, 700);
}

var hamm = new Hammer(document.querySelector('.main-wrap'));
hamm.get('swipe').set({ direction: Hammer.DIRECTION_ALL});
//hammer默认关闭上下swipe 设置开启上下滑屏
hamm.on('swipedown', function(){
        if(!sScroll){
                //上一页
                if(sIndex == 0){return; }
                sIndex--;
                scrollTo(sIndex);
        }

});
hamm.on('swipeup', function(){
        if(!sScroll){
                //下一页
                if(sIndex == sLength-1){return;}
                sIndex++;
                scrollTo(sIndex);
        }        

});

// window.onresize = function() {
//     var i = main.style.top.slice(0, -2) / sHeight;
//     sHeight = document.querySelector('.a').clientHeight;
//     main.style.top = i * sHeight + 'px';
// }
// //感知浏览器窗口大小调整