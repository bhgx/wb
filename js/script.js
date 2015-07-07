$(function(){

	var $login = $('#login'),
		$submit = $('#submit'),
		$close = $ ('#close'),
		$ceng = $('#ceng'),
		$step = $('#lc-step'),
		$success = $('#lc-success');

	$login.on('click',function(){
		$ceng.fadeIn(400);
	});


	$submit.on('click', function(){
		$step.css({
			display: 'none'
		});
		$success.css({
			display: 'block'
		});
		setTimeout(function(){
			$ceng.fadeOut(600,function(){
				$step.css({
					display: 'block'
				});
				$success.css({
					display: 'none'
				});
			});
			
		},1000)
		//$ceng.fadeOut(600);
	});

	$close.on('click', function(){
		$ceng.fadeOut(600);
	});


	/*************下载和提示页面JS**************/
	//下载
	function is_weixn(){  
	    var ua = navigator.userAgent.toLowerCase();  
	    if(ua.match(/MicroMessenger/i)=="micromessenger") {  
	        return true;  
	    } else { 
	        return false;  
	    }  
	};

	var u = navigator.userAgent;
	//android终端或者uc浏览器
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
	//ios终端
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 

	
	var $goDownloadAndroid = $('#goDownloadAndroid');
	var $goDownloadIos = $('#goDownloadIos');

	//ios提示在开发中
	$goDownloadIos.click(function(){
		alert('在开发中……');
		return false;

	});

	if(isIOS){
		$goDownloadAndroid.addClass('disabled');
	}
	if(isAndroid){
		$goDownloadIos.addClass('disabled');
	}

	if (is_weixn()){
	    $goDownloadAndroid.click(function(e){
	    	if(!$goDownloadAndroid.hasClass('disabled')){
	    		e.preventDefault();
		    	$('#loadTipCeng').fadeIn(500);
		        setTimeout(function(){
		        	$('#loadTipCeng').fadeOut(500);
		        },3000);
	    	}
	    });

	} else {
		if(isIOS){
		    goDownloadAndroid.href="";
		} else if (isAndroid) {
		    goDownloadAndroid.href="http://182.92.240.52/play/apk/paibao.apk?"+new Date().getTime();
		}
	}
	
});