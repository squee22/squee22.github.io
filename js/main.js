$('.lions button').click(function(){
  console.log('clicked button');
  var tigers = '';
  $.ajax('https://api.github.com/users/squee22').done(function(bears){
	  console.log('ajax request finished');
	  tigers = bears.avatar_url;
	 	$('.lions').html('<img src="'+tigers+'" alt="Scott sort of made this under direct supervision." />');
	 	console.log('finished modifying content');
	});
});
console.log('added event handler');
