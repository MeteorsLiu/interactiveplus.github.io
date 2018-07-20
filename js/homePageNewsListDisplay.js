function loadSelectorsWithNews(NewsSectionSelector,Selectors,Language,Limit = -1){ //NewsSectionSelector will be hided if no news is displayed.
    var SelectorCount = Selectors.length;
    var mNewsContainers = [];
    for(var i=0;i<SelectorCount;i++){
        mNewsContainers.push($(Selectors[i]));
    }
    var CurrentContainer = 0;
    var OutputCount = 0;
    for(var i=XSYD_News.newsList.length-1;i>=0;i--){
        /*
            <li class="pt-2">
                <i class="fa fa-angle-right pr-2"></i>
                <a href="" class="section-news-text">WPA3认证正式推出</a>
            </li>
        */
        var CurrentNews = XSYD_News.newsList[i];
        var CurrentNewsLangInfo = CurrentNews.cn;
        switch(Language){
            case "cn":
                CurrentNewsLangInfo = CurrentNews.cn;
                break;
            case "en":
                CurrentNewsLangInfo = CurrentNews.en;
                break;
        }
        if(CurrentNewsLangInfo === null || CurrentNewsLangInfo === undefined || CurrentNewsLangInfo.showOnIndexNews === false){
            continue;
        }
        var AppendText = 
            '<li class="pt-2">' +
                '<i class="fa fa-angle-right pr-2"></i>' +
                '<a href="' + XSYD_WebSettings.newsPage + i + '" class="section-news-text">' + CurrentNewsLangInfo.title + '</a>' +
            '</li>';
        $(mNewsContainers[CurrentContainer]).append(
            AppendText
        );
        CurrentContainer++;
        OutputCount++;
        if(OutputCount >= Limit && Limit != -1){
            break;
        }
    }
    if(OutputCount === 0){
        $(NewsSectionSelector).hide();
    }
}