$(function(){

	var $login = $('#login'),
		$submit = $('#submit'),
		$close = $ ('#close'),
		$ceng = $('#ceng');
	$login.on('click',function(){
		$ceng.fadeIn(400);
	});


	$submit.on('click', function(){

		$ceng.fadeOut(600);
	});

	$close.on('click', function(){
		$ceng.fadeOut(600);
	});
});