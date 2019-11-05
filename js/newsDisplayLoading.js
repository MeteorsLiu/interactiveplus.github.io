
function LoadArticle(TitleSelector, TitleAppendBefore, TitleAppendAfter,NewsContentSelector,NewsAuthorSelector,articleID,Lang){
    var mNewsContentBox = $(NewsContentSelector);
    var mArticle = XSYD_News.newsList[articleID];
    if(mArticle === null || mArticle === undefined){
        return false;
    }
    var mArticleLangInfo = mArticle.cn;
    switch(Lang){
        case "cn":
            mArticleLangInfo = mArticle.cn;
            break;
        case "en":
            mArticleLangInfo = mArticle.en;
            break;
    }
    if(mArticleLangInfo === null || mArticleLangInfo === undefined){
        return false;
    }

    //Start Reading Article Content URL
    var mArticleURL = "../";
    if(mArticleLangInfo.isURLAbsolute){
        mArticleURL += mArticleLangInfo.articleURL;
    }else{
        mArticleURL += XSYD_News.articlesBaseURL + mArticleLangInfo.articleURL;
    }
    //End Reading Article Content URL
    var mArticleAuthor = XSYD_MemberInfos.memberlist[mArticleLangInfo.AuthorID];
    if(mArticleAuthor === null || mArticleAuthor === undefined){
        return false;
    }
    var mArticleAuthorLangInfo = mArticleAuthor.cn;
    switch(Lang){
        case "cn":
            mArticleAuthorLangInfo = mArticleAuthor.cn;
            break;
        case "en":
            mArticleAuthorLangInfo = mArticleAuthor.en;
            break;
    }
    if(mArticleAuthorLangInfo === null || mArticleAuthorLangInfo === undefined){
        return false;
    }
    var ArticleAuthorDisplayCode = 
    '<div class="text-center section-two-item">' +
        '<img src="' + "../" + XSYD_MemberInfos.portraitBaseURL + mArticleAuthor.portrait + '" class="rounded-circle w-50" />' +
        '<div class="mt-3">' +
            '<h3 class="member-name">' + mArticleAuthorLangInfo.displayName + '</h3>' +
            '<p class="member-intro">' + mArticleAuthorLangInfo.role + '</p>' + 
            '<p class="member-intro">' + mArticleAuthorLangInfo.skills + '</p>' + 
            ((mArticleAuthor.github === null && mArticleAuthor.qq === null) ? "" :
            '<div class="member-icon">' + 
                (mArticleAuthor.github === null ? "" : 
                '<a href="https://github.com/' + mArticleAuthor.github + '" class="text-dark ml-1">' + 
                    '<i class="fa fa-github fa-lg"></i>' + 
                '</a>') + 
                (mArticleAuthor.qq == null ? "" : 
                '<a href="http://wpa.qq.com/msgrd?v=3&uin=' + mArticleAuthor.qq + '&site=qq&menu=yes" class="text-dark ml-1">' + 
                    '<i class="fa fa-qq fa-lg"></i>' + 
                '</a>') + 
            '</div>') + 
        '</div>' + 
    '</div>';
    if(NewsAuthorSelector !== null && NewsAuthorSelector !== undefined){
        $(NewsAuthorSelector).append(ArticleAuthorDisplayCode);
    }
    if(TitleSelector !== null && TitleSelector !== undefined){
        if(TitleAppendBefore === null || TitleAppendBefore === undefined){
            TitleAppendBefore = "";
        }
        if(TitleAppendAfter === null || TitleAppendAfter === undefined){
            TitleAppendAfter = "";
        }
        $(TitleSelector).html(TitleAppendBefore + mArticleLangInfo.title + TitleAppendAfter);
    }
    appendSelectorWithRemoteContent(NewsContentSelector,mArticleURL);
    return true;
}