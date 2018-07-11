$(document).ready(function() {

   window.cookieconsent.initialise({
                                  'palette': {
                                      'popup': {
                                        'background': '#efefef',
                                        'text': '#404040'
                                      },
                      'button': {
                      'background': '#1f1915',
                        'text': '#ffffff'
                      }
                                  },
                                  'theme': 'edgeless',
                                    'position': 'bottom',
                                    'content': {
                                        'message': '此网站需要使用Cookie，以便于我们可以给您更好的访问体验',
                                        'dismiss': '我知道了',                                                                                
                                    }
                })

 var mySwiper = new Swiper ('#Banner', {
    autoplay: true,
    loop: true,
    

    navigation: {
      nextEl: '#Banner-Button-Next',
      prevEl: '#Banner-Button-Prev',
    },
    
  })  

   if(mySwiper.slides.length = 1){
    mySwiper.destroy();
  }      

 });
$('#English').click(function() {
  $.cookie('lang','en');
});
$('#Chinese').click(function() {
  $.cookie('lang','zh');
});


