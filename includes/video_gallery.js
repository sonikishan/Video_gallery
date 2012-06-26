// JavaScript Document

$(document).ready(function() {
    $('a.videoLink').each(function() {
         var thumnailFilePath = 'video/'+ $(this).attr('videofile') + '.jpg';
		 var videoCaption = $(this).attr('videocaption');
		 
		 $(this).css('background-image','url('+thumnailFilePath+')');
		 $(this).html('<div class="caption">'+videoCaption+'</div> <img class="play" src="images/play_icon.png"/>');
    });
	
	$('.videoLink').click(function(){
		var videoFile = $(this).attr('videofile');
		var videoPoster = $(this).attr('videofile');
		var videoWidth = Number($(this).attr('videowidth'));
		var videoHeight = Number($(this).attr('videoheight'));
		
		var videoCode = '<video width="'+videoWidth+'" height="'+videoHeight+'" controls autoplay autobuffer><source src="video/'+videoFile+'.ogv" type="video/ogg" /><source src="video/'+videoFile+'.mp4" type="video/mp4" /><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+videoWidth+'" height="'+(videoHeight+40)+'" id="lynda_video_player" align="middle"><param name="allowScriptAccess" value="sameDomain"><param name="allowFullScreen" value="true"><param name="movie" value="lynda_video_player.swf?videoFile=video/'+videoFile+'.mp4&amp;skinFile=lynda_video_skin.swf&amp;videoFileWidth='+videoWidth+'&amp;videoFileHeight='+videoHeight+'"><param name="quality" value="high"><param name="wmode" value="transparent"><param name="scale" value="noscale"><param name="salign" value="lt"><embed src="lynda_video_player.swf?videoFile=video/'+videoFile+'.mp4&amp;skinFile=lynda_video_skin.swf&amp;videoFileWidth='+videoWidth+'&amp;videoFileHeight='+videoHeight+'" quality="high" width="'+videoWidth+'" height="'+(videoHeight+40)+'" name="lynda_video_player" align="middle" allowscriptaccess="sameDomain" type="application/x-shockwave-flash" scale="noscale" salign="lt" wmode="transparent" allowfullscreen="true" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object></video>'
		
		$('#videoPlayer').html(videoCode);
		
    	var checkBrowser = navigator.userAgent.toLowerCase();
	    var isAndroid = checkBrowser.indexOf('android') > -1;
	
       	if(isAndroid) {
		  $('#videoPlayer source[type*="video/mp4"]').removeAttr('type');
		  $('#videoPlayer video').attr('onclick','this.play();');
	    }
	
	
	// Option 2 - Detect for both Android, iPhone and iPod, and redirect to video
      	var checkBrowser = navigator.userAgent.toLowerCase();
	    var isAndroid = checkBrowser.indexOf('android') > -1;
	    var isiPhone = checkBrowser.indexOf('iphone') > -1;
	    var isiPod = checkBrowser.indexOf('ipod') > -1;
	
     	if( isAndroid || isiPhone || isiPod ){
	  	window.location = 'video/'+videoFile+'.mp4';
	    }else{
		  $.fancybox({
		   'transitionIn' : 'fade',
		   'transitionOut' : 'fade',
		   'href' : '#videoPlayer'
		});
	    }
		
	});

});