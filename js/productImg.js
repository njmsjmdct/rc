$(function(){
    
    const boxImg = $('.box-img');
   
    
    for(let i = 0; i < 12; i++){
                
        boxImg.eq(i).css('background-image', `url(./images/product_${i}.png)`);
        
        
    }
    
    const heart = $('.box-wrap .box .box-info .go .heart');
    
    
    function heartOn(){
        
        $(this).find('.heart-img').toggleClass('on');
        
    }

    heart.on('click', heartOn);
    
    
    const product = $('.box-wrap .box');
    
    
    function productOn(){
        
        $(this).find('.box-info').addClass('on');
        $(this).find('.box-img').addClass('on');
        
    }
    
    function productOut(){
        $(this).find('.box-info').removeClass('on');
        $(this).find('.box-img').removeClass('on');
        
    }
    
    
    
    product.on('mouseenter', productOn);
    product.on('mouseleave', productOut);
    
    
});