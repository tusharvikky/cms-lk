/*!
 * jQuery Math Quiz Validation 
 * 	- For CMS-Lucknow.
 *
 * Author:Tushar Deo <tusharvikky@gmail.com>
 * Released under MIT license
 *
 * Date: 2014-11-25 12:08
 * 
 * NOTE: Don't Remove console.log(), those will be used for
 * 		 future debugging purposes.
 */
$(function(){
// Jquery shorthand for document ready


$('input[name=answer]').change(function(){
	console.log('input changed');
	$('a#validate').removeAttr("disabled");
});


	$('a#validate').on('click', function(e){
		e.preventDefault();

		/* Grab Answer from data-answer */
		var rightAnswer = $('#question').data('answer');
		console.log(rightAnswer);

		/* Grab selected input Answer */
		var selectedAnswer = $('input[name=answer]:checked', '#answer').val();
		console.log(selectedAnswer);
		if(selectedAnswer == undefined){
			/* Throw Error, request user to select appropriate answer */
			console.log("Error Please input an answer");
		}else{

			/* Check both answers */
			if(selectedAnswer == rightAnswer){
				console.log("right answer");
				$("div#error").hide();
				$("a#next").show();
			}else{
				console.log("wrong answer");
				$("div#error").show();
				$('a#validate').hide();
			}
		}
		
		/* Future Expansion */

	});

});
