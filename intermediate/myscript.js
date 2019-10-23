 // $(document).ready(function() {
 //        $(".product-image:lt(2)").css("background-color","darkred");
 //        $(".product-image:gt(1)").css("background-color","green");
 //        $(".product-image:gt(3)").css("background-color","blue");
        
 //    });

 $(document).ready(function() {
        $(".laptop .product-image").css("background-color","darkred");
        $(".mobile .product-image").css("background-color","green");
        $(".tablet .product-image").css("background-color","blue");
        
    });


arrSelect=["all","laptop","mobile","tablet"];

let dropDown = document.createElement("select");
	dropDown.addEventListener("change",remover,false);
	document.getElementsByTagName("nav")[0].appendChild(dropDown);
		for (let i=0; i<arrSelect.length;i++){
			var option = document.createElement("option");
				option.value = arrSelect[i];
				option.textContent = arrSelect[i];
				dropDown.appendChild(option);
		}


function remover(){
	if ($("nav>select").val()=="all"){
		$(".hidden").css("display","inline-block").removeClass("hidden")
		;
	}else{
		$(".hidden").css("display","inline-block").removeClass("hidden")

		for (let i=1; i<arrSelect.length;i++){
			if (arrSelect[i]!=$("nav>select").val()){
				$("."+arrSelect[i]).css("display","none")
				$("."+arrSelect[i]).addClass("hidden")
			}
		}		

	}

}