var allTheBun1 = [];

//Document ready
$(document).ready(function() {

	//Change the price based on users' selection of size
	$(function() { 
    $('#dropdownSize').change(function() {
         $('#textToSwap').html($(this.options[this.selectedIndex]).attr('price'));
    }).change(); // Trigger the event
	});

	// Limit user's selection of flavor up to 3
	var limit = 3;
		$('input.single-checkbox').on('change', function(evt) {
			console.log("input checkbox change registered");
   		if($(this).siblings(':checked').length >= limit) {
       this.checked = false;
    }
	});

	//click add-to-cart, get value of the product, prepare for wishlist
    $('#add-to-wishlist').click(function(){

	var dropdownImageValue1 = $("#imageToSwap").attr("src");
    var dropdownSizeValue1 = $("#dropdownSize option:selected").text();
	var dropdownQuantityValue1 = $("#dropdownQuantity option:selected").text();
	var dropdownPriceValue1 = $("#textToSwap").text();
	var checkboxAllName1 = [];
	$('#checkbox-section input:checked').each(function() {
     	checkboxAllName1.push($(this).attr('id'));
	});

    var item1 = {dropdownImageValue1, dropdownSizeValue1, dropdownQuantityValue1, checkboxAllName1, dropdownPriceValue1};
    var oldItems1 = JSON.parse(localStorage.getItem("allTheBun1")) || [];

    oldItems1.push(item1);
	localStorage.setItem("allTheBun1", JSON.stringify(oldItems1));

    });

	//push the value of the product to wishlist
	var newItems1 = JSON.parse(localStorage.getItem("allTheBun1")) || [];
	console.log(newItems1);

		for (var i = 0; i < newItems1.length; i++) {

 			var cartItem1 = $("<div class=\"bunsInTheCart1\" id=\"itemsInTheWishlist\"><h3>Flavor: " + newItems1[i]['checkboxAllName1'] + "</h3>" 
 				+ "<img src="+ newItems1[i]['dropdownImageValue1']+" />"
		    	+ "<h4>Size: " + newItems1[i]['dropdownSizeValue1'] + "</h4>" 
		    	+ "<h4>Quantity: " + newItems1[i]['dropdownQuantityValue1'] + "</h4>" 
		    	+ "<h4>" + newItems1[i]['dropdownPriceValue1'] + "</h4>"
		    	+ "<button class='delete-item1'><strong>remove<strong></button></div>");

		    cartItem1.data("item1", newItems1[i]);
		    $("#wish-list").append(cartItem1);
		};

		$('.delete-item1').click(function(){
	    	var parent1 = $(this).parent();
	    	var item1 = parent1.data("item1")
	    	parent1.remove();
	    	var index1 = newItems1.indexOf(item1)
	    	newItems1.splice(index1, 1)
	    	localStorage.setItem("allTheBun1", JSON.stringify(newItems1))
	    
	    });
	    });