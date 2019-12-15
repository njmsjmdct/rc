$(function(){
    
    
    
    let random = Math.floor(Math.random()*4+1);
    
        
    function randomImg(){
        
        let imgBox = $('#section01 .section01 .slide-box > img');
        
        imgBox.attr('src', `images/main_0${random}.jpg`);
        
    }
    
    
    
    randomImg();
    
    
});