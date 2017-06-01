//Strike through specific item by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
})

//clicking on span to delete to-do
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
});

//input functionality

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + text + "</li>")

	};
})

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle()
})