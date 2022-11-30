function dynamicDisplayMembers(Selector, Language){
    "use strict";
    var DisplayRow = $(Selector);
    for(var i=0;i<XSYD_MemberInfos.memberlist.length;i++){
        var CurrentMember = XSYD_MemberInfos.memberlist[i];
        var CurrentMemberLangInfo = CurrentMember.cn;
        switch(Language){
            case "cn":
                CurrentMemberLangInfo = CurrentMember.cn;
                break;
            case "en":
                CurrentMemberLangInfo = CurrentMember.en;
                break;
        }
        DisplayRow.append(
            '<div class="col-sm-4 col-md-3">' +
                '<div class="text-center section-two-item">' +
                    (CurrentMember.blog == null ? 
                        ('<img src="' +  "../" + XSYD_MemberInfos.portraitBaseURL + CurrentMember.portrait + '" class="rounded-circle w-50" />') : 
                        ('<a href="'+ CurrentMember.blog +'" target="_blank">' + 
                            '<img src="' +  "../" + XSYD_MemberInfos.portraitBaseURL + CurrentMember.portrait + '" class="rounded-circle w-50" />' + 
                        '</a>')) +
                    '<div class="mt-3">' +
                        '<h3 class="member-name">' + CurrentMemberLangInfo.displayName + '</h3>' +
                        '<p class="member-intro">' + CurrentMemberLangInfo.role + '</p>' + 
                        '<p class="member-intro">' + CurrentMemberLangInfo.skills + '</p>' + 
                        ((CurrentMember.github === null && CurrentMember.qq === null) ? "" :
                        '<div class="member-icon">' + 
                            (CurrentMember.github === null ? "" : 
                            '<a href="https://github.com/' + CurrentMember.github + '" class="text-dark ml-1">' + 
                                '<i class="fa fa-github fa-lg"></i>' + 
                            '</a>') + 
                            (CurrentMember.qq == null ? "" : 
                            '<a href="http://wpa.qq.com/msgrd?v=3&uin=' + CurrentMember.qq + '&site=qq&menu=yes" class="text-dark ml-1">' + 
                                '<i class="fa fa-qq fa-lg"></i>' + 
                            '</a>') + 
                        '</div>') + 
                    '</div>' + 
                '</div>' + 
            '</div>'
        )
    }
    /* Template
    <div class="col-sm-4 col-md-3">
        <div class="text-center section-two-item">
            <img src="{portraitBaseURL}{memberportraitURL}" alt="" class="rounded-circle w-50" />
            <div class="mt-3">
                <h3 class="member-name">{membername}</h3>
                <p class="member-intro">{memberrole}</p>
                <p class="member-intro">{memberskills}</p>
                <div class="member-icon">
                    <a href="https://github.com/{membergithub}" class="text-dark ml-1">
                        <i class="fa fa-github fa-lg"></i>
                    </a>
                    <a href="http://wpa.qq.com/msgrd?v=3&uin={memberqq}&site=qq&menu=yes" class="text-dark ml-1">
                        <i class="fa fa-qq fa-lg"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    */

}
