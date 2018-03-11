$(document).ready(function(){
	$(".fermer").click(function(){
		$("#header").addClass("vueMenu");
		$("#header").removeClass("invisible");
		$("#menu").addClass("ouvert");
		$("#menu").removeClass("fermer");	
	});
	$(".ouvert").click(function(){
		$("#menu").removeClass("ouvert");
		$("#header").removeClass("vueMenu");
		$("#header").addClass("invisible");
		$("#menu").addClass("fermer");
	});
	
});
