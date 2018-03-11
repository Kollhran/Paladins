$(document).ready(function(){
	$(".fermer").click(function(){
		$("#header").addClass("vueMenu");
		$("#menu").addClass("ouvert");
		$("#header").removeClass("invisible");
		$("#menu").removeClass("fermer");	
	});
	$(".ouvert").click(function(){
		$("#header").addClass("invisible");
		$("#menu").addClass("fermer");
		$("#header").removeClass("vueMenu");
		$("#menu").removeClass("ouvert");
	});
	
});
