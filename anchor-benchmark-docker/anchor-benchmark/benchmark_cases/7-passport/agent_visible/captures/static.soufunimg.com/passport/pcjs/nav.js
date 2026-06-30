
jQuery(function () {
    jQuery(".clear").remove();
    var deletename = "漳州,舟山,岳阳,盐城,襄阳,乐山,临沂,济宁,衡阳,蚌埠,全国";
    jQuery(".city20141104nr a").each(function () {
        var name = jQuery(this).text();
        if (deletename.indexOf(name) > 0) {
            jQuery(this).remove();
        } else {
            var temp = jQuery(this).attr("href").replace("/?city=", "");
                //.replace("http://", "").replace(".fang.com/", "").replace("www.", "").replace(".com/", "");
            if (temp == "" || temp == "www") {
                temp = "bj";
            }
            jQuery(this).attr("href", window.location.pathname + "?city=" + temp + "&cityname=" + encodeURI(name));//需要修改
        }
    })
});

jQuery(function () {
    jQuery(".clear").remove();
    var deletename = "海外";
    jQuery(".city20141104nr a").each(function () {
        var name = jQuery(this).text();
        if (deletename.indexOf(name) >= 0) {
            jQuery(this).attr("href", "http://world.fang.com");
        }
    })
});

jQuery(function () {
    jQuery(".clear").remove();
    var deletename = "377城市";
    jQuery(".city20141104nr a").each(function () {
        var name = jQuery(this).text();
        if (deletename.indexOf(name) >= 0) {
            jQuery(this).attr("href", "http://fang.com/SoufunFamily.htm");
        }
    })
});

jQuery(function () {
    jQuery(".clear").remove();
    var deletename = "更多城市>>";
    jQuery(".city20141104nr a").each(function () {
        var name = jQuery(this).text();
        if (deletename.indexOf(name) >= 0) {
            jQuery(this).attr("href", "http://fang.com/SoufunFamily.htm");
        }
    })
});


jQuery(function () {
    //jQuery(".clear").remove();
    //var deletename = "注册";
    //jQuery(".s4a").eq(-2).after(jQuery(".s4a").eq(-2).clone());
    //jQuery(".s4a").eq(-3).after(jQuery(".s4a").eq(-3).clone());
    //经纪云
    //jQuery(".s4a").eq(2).css("width","60px");
    //jQuery(".s4a a").eq(2).text("经纪云");
    //jQuery(".s4a a").eq(2).attr("href", "http://agent.fang.com/");
    //jQuery(".s4a a").eq(2).attr("target", "_blank");
    //开发云
    //jQuery(".s4a").eq(1).css("width", "60px");
    //jQuery(".s4a a").eq(1).text("开发云");
    //jQuery(".s4a a").eq(1).attr("href", "http://open.fang.com/");
    //jQuery(".s4a a").eq(1).attr("target", "_blank");
    //家居云
    //jQuery(".s4a").eq(0).css("width", "60px");
    //jQuery(".s4a a").eq(0).text("家居云");
    //jQuery(".s4a a").eq(0).attr("href", "http://ebs.home.fang.com/");
    //jQuery(".s4a a").eq(0).attr("target", "_blank");
});

jQuery(function () {
    var backurl = jQuery("#backurl").val();
    var tempHtml;
    if (backurl) {
        tempHtml = "<div class=\"s4Box\"><a href=\"/NewLogin.aspx?backurl=" + backurl + "\">登录</a></div>";
    } else {
        tempHtml = "<div class=\"s4Box\"><a href=\"/NewLogin.aspx\">登录</a></div>";
    }
    jQuery(".clear").remove();
    var deletename = "登录";
    //jQuery(".s4Box a:last").mouseover(function () {
    //    jQuery(".s4a:last").html(tempHtml);
    //});
});


function updateToLoginState(username,nickname) {
    var backurl = jQuery("#backurl").val();
    var tempHtml;
    if (username) {
        if (nickname) {
            username = nickname;
        }
        jQuery(".s4a a").eq(3).text(username);
        if (backurl) {
            tempHtml = "<div class=\"s4Box\"><a href=\"/NewLogin.aspx?backurl=" + backurl + "\">" + username + "</a></div><div class='listBox' ><ul><li><a href='http://my.fang.com' target='_self'>我的房天下</a></li></ul><div class='tuic'  style='height: 26px;line-height: 26px;text-align: center;border-top: 1px solid #cccccc;font-size: 12px;'><a href='/logout.aspx?backurl='" + backurl + " style='display: block;' target='_self'>退出</a></div>";
        } else {
            tempHtml = "<div class=\"s4Box\"><a href=\"/NewLogin.aspx\">" + username + "</a></div><div class='listBox' ><ul><li><a href='http://my.fang.com' target='_self'>我的房天下</a></li></ul><div class='tuic'  style='height: 26px;line-height: 26px;text-align: center;border-top: 1px solid #cccccc;font-size: 12px;'><a href='/logout.aspx' style='display: block;' target='_self'>退出</a></div>";
        }
    } else {
        if (backurl) {
            tempHtml = "<div class=\"s4Box\"><a href=\"/NewLogin.aspx?backurl=" + backurl + "\">登录</a></div>";
        } else {
            tempHtml = "<div class=\"s4Box\"><a href=\"/NewLogin.aspx\">登录</a></div>";
        }
    }
    jQuery(".clear").remove();
    //jQuery(".s4Box a:last").mouseover(function () {
    //    jQuery(".s4a:last").html(tempHtml);
    //});
}