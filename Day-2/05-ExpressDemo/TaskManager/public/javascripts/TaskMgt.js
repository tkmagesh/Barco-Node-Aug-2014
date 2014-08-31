$(function(){
	$("#taskList > :submit").click(function(){
		console.log("toggle triggered");
		$(this).prev("span").toggleClass("completed");
		return false;
	});
});