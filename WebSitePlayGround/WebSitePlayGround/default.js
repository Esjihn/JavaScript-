function add(num1, num2) {
	return num1 + num2;
}
function changeText() {
	// Use .textContent instead of .innerHTML for security reasons
	// and instead of .innerText due to some layout system information
	// that causes performance decreases
	document.getElementById("clickChange").textContent = "Change Text";

}

function changeTextBack() {
	document.getElementById("clickChange").textContent = "Click Me!";
}
