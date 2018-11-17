/**
 * Created by Administrator on 2018/11/11.
 */
$(function(){
    banner();
    $('[data-toggle="tooltip"]').tooltip()
});
var banner=function(){
    var startX=0;//起始坐标
    var changeX=0;//滑动距离,会有正负
    $('.wjs_banner').on('touchstart',function(e){
        //原生事件的对象:eoriginalEvent
        startX= e.originalEvent.touches[0].clientX;
    }).on('touchmove',function(e){
        var moveX= e.originalEvent.touches[0].clientX;
        changeX=moveX-startX;
    }).on('touchend',function(e){
        if(Math.abs(changeX)>50){
            if(changeX>0){
                /*右边滑动  上一张*/
                $('.carousel').carousel('prev');
            }else{
                /*左边滑动  下一张*/
                $('.carousel').carousel('next');
            }
        }
    })

};


var initTabs=function(){
    //实现区域滚动
//    1.使用插件
//    一个父容器,溢出隐藏,宽度100%
    var $navTabsParent=$('.nav-tabs-parent');
    $navTabsParent.css({
       width:'100%',
        overflow:'hidden'
    });
    //2.一个子容器,能够放下7个li元素
    var widthSum = 0;
    $navTabsParent.find('li').each(function(){
        widthSum+=$(this).outerWidth(true);
    });
    $navTabsParent.find('ul').width(widthSum);
//    3.初始化区域滚动效果
    new IScroll($navTabsParent[0],{
        scrollX:true,
        scrollY:false
    });

};
