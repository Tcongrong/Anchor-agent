function independent_statistics(){
	if(document.cookie.indexOf("doyo_www_uv_mark=true")<0){
		var doyo_www_uv_mark_expTime=new Date();
		doyo_www_uv_mark_expTime.setTime(doyo_www_uv_mark_expTime.getTime()+86400000-doyo_www_uv_mark_expTime.getTime()%86400000+(doyo_www_uv_mark_expTime.getTime()%86400000<57600000?-28800000:57600000));
		document.cookie="doyo_www_uv_mark=true;expires="+doyo_www_uv_mark_expTime.toUTCString()+";path=/";
		$.getScript("https://ping.doyo.cn/counter?id=10067");
	};
};
function set_channel_init(){
	var set_c=0;
	if(location.search.toLowerCase().indexOf("set_c=")>0){set_c=location.search.toLowerCase().split("set_c=")[1].split("&")[0];};
	if(document.referrer.indexOf("9724.com")>0&&set_c==0){set_c=3400;};
	if(/^[1-9]\d*$/.test(set_c)){
		$("<div style=\"display:none;\"><iframe src=\"http://note.doyo.cn/?c="+set_c+"\"></iframe></div>").appendTo("body");
	};
};
function from_tongji_init(){
	var url=location.href.toLowerCase();
	var ref=document.referrer.toLowerCase();
	var cok=document.cookie.toLowerCase();

	if(url.indexOf("xyx9724")>0){$("<iframe src=\"http://tablet.doyo.cn/jump/from?xyx9724_in\" style=\"width:0;height:0;border:0;\"></iframe>").appendTo("body");document.cookie="xyx9724=1;path=/;domain=.doyo.cn";document.cookie="flash_play_from=xyx9724;path=/;domain=.doyo.cn";cok=document.cookie.toLowerCase();};
	if(cok.indexOf("xyx9724=1")>=0){$("<iframe src=\"http://tablet.doyo.cn/jump/from?xyx9724_all\" style=\"width:0;height:0;border:0;\"></iframe>").appendTo("body");};

	if(url.indexOf("from=360onebox")>0){$("<iframe src=\"http://tablet.doyo.cn/jump/from?360onebox\" style=\"width:0;height:0;border:0;\"></iframe>").appendTo("body");};
	if(url.indexOf("xyx360")>0){$("<iframe src=\"http://tablet.doyo.cn/jump/from?xyx360_in\" style=\"width:0;height:0;border:0;\"></iframe>").appendTo("body");document.cookie="xyx360=1;path=/;domain=.doyo.cn";document.cookie="flash_play_from=xyx360;path=/;domain=.doyo.cn";cok=document.cookie.toLowerCase();};
	if(cok.indexOf("xyx360=1")>=0){$("<iframe src=\"http://tablet.doyo.cn/jump/from?xyx360_all\" style=\"width:0;height:0;border:0;\"></iframe>").appendTo("body");};

};

try{
jQuery(function($){

independent_statistics();
set_channel_init();
from_tongji_init();
$.getScript("https://tj.doyo.cn/pv.php?u="+encodeURIComponent(window.self.location.href.toLowerCase())+"&r="+encodeURIComponent(document.referrer.toLowerCase()));

});
}catch(e){};