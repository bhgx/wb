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
});