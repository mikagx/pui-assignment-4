var allTheBun = [];

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

	//click add-to-cart, get value of the product, prepare for shopping cart
	$('#add-to-cart').click(function(){

	var dropdownImageValue = $("#imageToSwap").attr("src");
    var dropdownSizeValue = $("#dropdownSize option:selected").text();
	var dropdownQuantityValue = $("#dropdownQuantity option:selected").text();
	var dropdownPriceValue = $("#textToSwap").text();
	var checkboxAllName = [];
	$('#checkbox-section input:checked').each(function() {
     	checkboxAllName.push($(this).attr('id'));
	});

    var item = {dropdownImageValue, dropdownSizeValue, dropdownQuantityValue, checkboxAllName, dropdownPriceValue};
    var oldItems = JSON.parse(localStorage.getItem("allTheBun")) || [];

    oldItems.push(item);
	localStorage.setItem("allTheBun", JSON.stringify(oldItems));
	console.log("This is selectedItem.size" + " " + oldItems);

	console.log(oldItems[0]);
	document.getElementById("cart-number").innerHTML = oldItems.length; 
    });

	//push the value of the product to shopping cart page
	var newItems = JSON.parse(localStorage.getItem("allTheBun")) || [];
	console.log(newItems);

		for (var i = 0; i < newItems.length; i++) {

 			var cartItem = $("<div class=\"bunsInTheCart\"><h3>Flavor: " + newItems[i]['checkboxAllName'] + "</h3>" 
 				+ "<img src="+ newItems[i]['dropdownImageValue']+" />"
		    	+ "<h4>Size: " + newItems[i]['dropdownSizeValue'] + "</h4>" 
		    	+ "<h4>Quantity: " + newItems[i]['dropdownQuantityValue'] + "</h4>" 
		    	+ "<h4>" + newItems[i]['dropdownPriceValue'] + "</h4>"
		    	+ "<button class='delete-item'><strong>remove<strong></button></div>");

		    cartItem.data("item", newItems[i]);
		    $("#shopping-cart").append(cartItem);
		};

		$('.delete-item').click(function(){
	    	var parent = $(this).parent();
	    	var item = parent.data("item")
	    	parent.remove();
	    	var index = newItems.indexOf(item)
	    	newItems.splice(index, 1)
	    	localStorage.setItem("allTheBun", JSON.stringify(newItems))
	    	document.getElementById('cart-number').innerHTML = newItems.length;
	    });

    document.getElementById('cart-number').innerHTML = newItems.length;

});