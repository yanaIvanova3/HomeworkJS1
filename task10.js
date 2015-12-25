/**
 * 
 */
function formValidation() {
	var input = document.getElementsByClassName("inputField").value;
	if (input == null || input == "") {
		alert("This input is required");
		document.getElementsByClassName("inputField").className = "error";
		return false;
	}

}

function countryOption(elem) {
	if (elem.value == 'Other') {
		document.getElementById("hidden-div").style.display = 'block';
	} else {
		document.getElementById("other-div").style.display = 'none';
	}
	
}