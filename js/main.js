var XSYD_WebSettings = {
	newsPage: "newsdisplay.html?id="
};

$(document).ready(function() { //$().load function is deprecated
	"use strict";
	if($.cookie("XSYD_CookiePrompted") === null || $.cookie("XSYD_CookiePrompted") === undefined){
		$.cookie("XSYD_CookiePrompted",true,{expires:1, path:'/'});
		if($.cookie("XSYD_Language") === null || $.cookie("XSYD_Language") === undefined){
			$.cookie("XSYD_Language","cn",{expires:365, path:'/'}); //Cookie is supposed to be set at the language detection page.
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
		cookieconsent.initialise(
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
	}
});
$('#LangSelection_English').click(function() {
	"use strict";
	$.cookie('XSYD_Language','en');
});
$('#LangSelection_Chinese').click(function() {
	"use strict";
	$.cookie('XSYD_Language','cn');
});
function setSelectorWithRemoteContent(Selector,URL){
	"use strict";
	$.ajax(
		{
			url: URL,
			dataType: "html",
			data: null,
			type: "GET",
			async: true
		}
	)
	.done(function(data, textStatus, jqXHR ){
		$(Selector).html(data);
	})
	.fail(function(jqXHR, textStatus, errorThrown){
		console.log("Document failed to load: " + textStatus);
	});
}
function appendSelectorWithRemoteContent(Selector, URL){
	"use strict";
	$.ajax(
		{
			url: URL,
			dataType: "html",
			data: null,
			type: "GET",
			async: true
		}
	)
	.done(function(data, textStatus, jqXHR ){
		$(Selector).append(data);
	})
	.fail(function(jqXHR, textStatus, errorThrown){
		console.log("Document failed to load: " + textStatus);
	});
}
function prependSelectorWithRemoteContent(Selector, URL){
	"use strict";
	$.ajax(
		{
			url: URL,
			dataType: "html",
			data: null,
			type: "GET",
			async: true
		}
	)
	.done(function(data, textStatus, jqXHR ){
		$(Selector).prepend(data);
	})
	.fail(function(jqXHR, textStatus, errorThrown){
		console.log("Document failed to load: " + textStatus);
	});
}




