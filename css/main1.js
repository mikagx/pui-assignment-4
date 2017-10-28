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


$(document).ready(function () {
    $("input[name='tech']").change(function () {
        var maxAllowed = 2;
        var cnt = $("input[name='tech']:checked").length;
        if (cnt > maxAllowed) {
            $(this).prop("checked", "");
            alert('You can select maximum ' + maxAllowed + ' technologies!!');
        }
    });
});