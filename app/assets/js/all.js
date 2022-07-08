$(document).ready(function(){
    //下拉選單 
    $(".dropdown").click(function(event){
        event.preventDefault();
        $(this).addClass("active").parent().siblings().find(".dropdown").removeClass("active");
        $(this).siblings(".dropdown-list").slideToggle().parent().siblings().find(".dropdown-list").slideUp();
    });

    // lightbox
    $(".top").click(function(){
        event.preventDefault();
        $("html,body").animate({
            scrollTop:0
        },700);
    });

    // swiper
    var swiper = new Swiper(".mySwiper", {
        
        direction: 'horizontal',
        loop: true,
        autoplay:{
            Delay:1500,
            disableOnInteraction: false,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });
});