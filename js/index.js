/**
 * Created by Administrator on 2018/11/11.
 */
$(function(){
    banner();
    $('[data-toggle="tooltip"]').tooltip()
});
var banner=function(){
    var startX=0;//��ʼ����
    var changeX=0;//��������,��������
    $('.wjs_banner').on('touchstart',function(e){
        //ԭ���¼��Ķ���:eoriginalEvent
        startX= e.originalEvent.touches[0].clientX;
    }).on('touchmove',function(e){
        var moveX= e.originalEvent.touches[0].clientX;
        changeX=moveX-startX;
    }).on('touchend',function(e){
        if(Math.abs(changeX)>50){
            if(changeX>0){
                /*�ұ߻���  ��һ��*/
                $('.carousel').carousel('prev');
            }else{
                /*��߻���  ��һ��*/
                $('.carousel').carousel('next');
            }
        }
    })

};


var initTabs=function(){
    //ʵ���������
//    1.ʹ�ò��
//    һ��������,�������,���100%
    var $navTabsParent=$('.nav-tabs-parent');
    $navTabsParent.css({
       width:'100%',
        overflow:'hidden'
    });
    //2.һ��������,�ܹ�����7��liԪ��
    var widthSum = 0;
    $navTabsParent.find('li').each(function(){
        widthSum+=$(this).outerWidth(true);
    });
    $navTabsParent.find('ul').width(widthSum);
//    3.��ʼ���������Ч��
    new IScroll($navTabsParent[0],{
        scrollX:true,
        scrollY:false
    });

};
