$(function (){
    isMenuHidden = true;
   $('.menu_icon').click(function (){
       if(isMenuHidden){
            $('.menu_categorie').css('display','block');
            isMenuHidden = false;
       }
       else{
           $('.menu_categorie').css('display','none');
            isMenuHidden = true;
       }
         
   });
});