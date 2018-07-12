$(document).on("load",function() { //$().load function is deprecated
	"use strict";


	if($.cookie("XSYD_CookiePrompted") === null){
		if($.cookie("XSYD_Language") === null){
			$.cookie("XSYD_Language","cn"); //Cookie is supposed to be set at the language detection page.
	  }
		var CookieConsent = {message:'', dismiss:''};
		if($.cookie("XSYD_Language") === "cn"){
			CookieConsent.message = "此网站需要使用Cookie，以便于我们可以给您更好的访问体验";
			CookieConsent.dismiss = "我知道了";
      CookieConsent.link = '了解更多';
		}else if($.cookie("XSYD_Language") === "en"){
			CookieConsent.message = "This website needs your cookie in order for us to give you a better experience";
			CookieConsent.dismiss = "Got it";
		}

	  }


      window.cookieconsent.initialise(
      {
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
        'content': CookieConsent
      }
    );

});
$('#LangSelection_English').click(function() {
	"use strict";
	$.cookie('XSYD_Language','en');
});
$('#LangSelection_Chinese').click(function() {
	"use strict";
	$.cookie('XSYD_Language','cn');
});




