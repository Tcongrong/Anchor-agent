//遮盖层调用
function showbestrow(page,callback){
	$("<div id=\"showbestrow\" style=\"position:absolute;z-index:100;\"></div>").appendTo("body");
	$("<div id=\"bestrowcont\" style=\"position:absolute;z-index:101;\"></div>").insertAfter("#showbestrow");
	$("#showbestrow").css({left:"0",top:"0",background:"#000",filter:"alpha(opacity=30)","opacity":"0.3",width:document.documentElement.scrollWidth,height:document.documentElement.clientHeight>document.documentElement.scrollHeight?document.documentElement.clientHeight:document.documentElement.scrollHeight});
	$("select").css("visibility","hidden");
	$("#bestrowcont").load(page,function(){
		var bleft=($(window).width()-$("#bestrowcont").width())/2;if(parseInt(bleft)<30){bleft=30};
		var btop=($(window).height()-$("#bestrowcont").height())/2+$(window).scrollTop();if(parseInt(btop)<30){btop=30};
		$("#bestrowcont").css({left:bleft,top:btop});
		$("#showbestrow").css({width:document.documentElement.scrollWidth,height:document.documentElement.clientHeight>document.documentElement.scrollHeight?document.documentElement.clientHeight:document.documentElement.scrollHeight}).one("click",function(){
			$("#bestrowcont .close").click();
		});
		$("#bestrowcont .close").one("click",function(){
			$("#bestrowcont,#showbestrow").remove();
			$("select").css("visibility","visible");
			$(window).unbind("resize",first_resetbestrow);
			return false;
		}).hover(function(){
			$(this).addClass("close_hover");
		},function(){
			$(this).removeClass("close_hover");
		});
	});
	$(window).one("resize",first_resetbestrow);
};
function first_resetbestrow(){
	$("#showbestrow").css({width:$(window).width(),height:$(window).height()});
	window.setTimeout(second_resetbestrow,0);
}
function second_resetbestrow(){
	var bleft=($(window).width()-$("#bestrowcont").width())/2;if(parseInt(bleft)<30){bleft=30};
	var btop=($(window).height()-$("#bestrowcont").height())/2+$(window).scrollTop();if(parseInt(btop)<30){btop=30};
	$("#bestrowcont").css({left:bleft,top:btop});
	$("#showbestrow").css({width:document.documentElement.scrollWidth,height:document.documentElement.clientHeight>document.documentElement.scrollHeight?document.documentElement.clientHeight:document.documentElement.scrollHeight});
	$(window).one("resize",first_resetbestrow);
}

//字数检查程序
function word_counter(){
	if($("#msg_input").val().length<1001){
		$(".c_counter").html("还能输入<span>"+(1000-$("#msg_input").val().length)+"</span>个字");
	}else{
		$(".c_counter").html("<span style=\"color:#F60;\">字数已超出 "+(str.length-1000)+" 个字</span>");
	}
}