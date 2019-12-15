$(function(){
    
    
    
    function scrollEvent(){
        
        const navHeight = $('.header').height();
        const navOffset = $('.header').offset().top;
        let winScroll = $(window).scrollTop();
        const header = $('.header-scroll');
        const navFixed = $('.nav-767');
        
        
        if(winScroll>navHeight){

            header.addClass('on');
            navFixed.addClass('on');
            
        }else{
            header.removeClass('on');
            navFixed.removeClass('on');
            
        }
        
        
        
        
        
    }
   
    
    $(window).on('scroll', scrollEvent);
    
    
    scrollEvent();
    
});