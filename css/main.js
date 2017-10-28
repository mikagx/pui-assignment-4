//Document ready, click add-to-cart, get value of the product
$(document).ready(function() {

	$('#add-to-cart').click(function(){
    getDropdownValue();
    });

    document.getElementById('cart-number').innerHTML = getCurrentCartValue();

     

})


function getCurrentCartValue() {

	var val = localStorage.getItem("currentVal");
	if(val) {
		return val;
	}
	return 0;
}

function setCurrentCartValue() {

	var currentVal = getCurrentCartValue(); 
	currentVal++; // instead of ++ +=6 
	document.getElementById("cart-number").innerHTML = currentVal; 
	localStorage.setItem("currentVal", currentVal);
}

function modifyCart() {

	document.getElementById("#cart-number").innerHTML = 1;
	localStorage.setItem('cartnumber', 1);
}

/*
function save(){
    var checkbox = document.getElementById('Bacon');
    localStorage.setItem('Bacon', checkbox.checked);
    console.log(localStorage.getItem('Bacon'));
}
*/



function getDropdownValue(){
	 var dropdownSizeValue = $("#dropdownSize option:selected").text();
	 //console.log("This is dropdownSize" + " " + dropdownSizeValue);

	 var dropdownQuantityValue = $("#dropdownQuantity option:selected").text();
	 //console.log("This is dropdownSize" + " " + dropdownQuantityValue);

	 var checkboxAllName = [];
	 $('#checkbox-section input:checked').each(function() {
     	checkboxAllName.push($(this).attr('id'));
	 });
	 //console.log("This is checkboxAllName" + " " +checkboxAllName);

     var item = {dropdownSizeValue, dropdownQuantityValue, checkboxAllName};
     console.log("This is item" + " " + item);

     var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
     console.log("This is selectedItem" + " " + selectedItem);

     oldItems.push(item);

     localStorage.setItem("itemsArray", JSON.stringify(oldItems));

     
     
     /*JSON.parse(selectedItem);

     var theSpecificProduct = JSON.parse(localStorage.getItem("someitem"));
     console.log(selectedItem);*/

     $("#product-title-1").text(selectedItem.size + " the " + selectedItem.quantity);
     //console.log("This is selectedItem.size" + " " + selectedItem.size + " " +selectedItem.quantity);

};


/*
function updateCount(){
	var storedCount = 0;
	if 
         
		 $("#animal-name").text(animal.name +" the "+ animal.type);
		 // update the image based on the animal’s image property  
		 $("#animal-img").attr("src", animal.image);
}
*/