$(function(){
    
    
    const navMenu = $('header nav .nav li');
    const nav767 = $('.nav-767 .btn');
    const nav767Menu = $('.nav-767menu');
    
    function navOn(){
        
        $(this).addClass('on');
        
    }
    
    function navOut(){
        
        navMenu.removeClass('on');
    }
    
    function navClick(){
        
        nav767.toggleClass('on');
        
        if(nav767.hasClass('on')){
            nav767Menu.css('right', '0');
        }else{
            nav767Menu.css('right', '-51vw');
             }
    }
    
    navMenu.on('mouseenter', navOn);
    navMenu.on('mouseleave', navOut);
    nav767.on('click', navClick);
    
    
    
    
});