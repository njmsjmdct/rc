$(function(){
   
    
    let slideBox = document.querySelector('.slide-box');
    let section01Height = document.querySelector('#section01');
    let boxWidth = $('.box');
    
    
    function imgResize(){
        let img = slideBox.querySelector('img');
        let imgHeight = img.height;
        let boxH = boxWidth.width();
        
        section01Height.height = imgHeight;
        slideBox.height = imgHeight;
        boxWidth.height(boxH);
        

    }
    
//    if($(window).width() < 767){
//        
//        const cut = $('.cut');
//        
//        cut.remove();
//        
//    }
    
    
    
    $(window).on('resize', imgResize);
    
    imgResize();
    
});