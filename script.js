var mail = "gm.shimul@outlook.com";
var pass = "Martuza007";
$("#btn").mouseenter(function(){
	var a = $("#pass").val();
	var b = a.length;
	// $("#strength").text(b);

	 if(b <= 6){
		$("#strength").text("Weak")
		$("#strength").css("color","red")
	} else if (b <= 8) {
		$("#strength").text("Normal")
		$("#strength").css("color","limegreen")
	} else if (b > 8) {
		$("#strength").text("Strong")
		$("#strength").css("color","green")
	}

	
});
$("#btn").click(function(){
	var email = $("#mail").val();
	var password = $("#pass").val();
	if( email =='' || password ==''){
		
		alert("Please fill all fields...!!!!!!");
	}else{
		if( email == mail && password == pass ){
			alert("Login Succesfully ........!!")
		}else{
			alert("Wrong Email or Password ........!!")
		}
	}
});
 //Comment section

$("#cmnt_btn").click(function(){
	var comment = $("#comments").val();
		if(comment !== ""){
			$("#comment").append("<p>"  + comment + "</p>" );
			$("#comment").css("border-bottom","none");

			// $("#empty1").text(a.length);
		}
})
 
// Portfolio
$("#all").click(function(){
	$(".portfolio_image").show(1000);
})
$("#web").click(function(){
	$(".portfolio_image").filter("#web_design").show(1000);
	$(".portfolio_image").filter("#android").hide(1000);
	$(".portfolio_image").filter("#joomla").hide(1000);
	
})
$("#android_btn").click(function(){
	$(".portfolio_image").filter("#android").show(1000);
	$(".portfolio_image").filter("#web_design").hide(1000);
	$(".portfolio_image").filter("#joomla").hide(1000);
	
})
$("#joomla_btn").click(function(){
	$(".portfolio_image").filter("#joomla").show(1000);
	$(".portfolio_image").filter("#android").hide(1000);
	$(".portfolio_image").filter("#web_design").hide(1000);
	
})