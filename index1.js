window.onload = function() {
	var four = document.getElementById('four');
	var windows = document.getElementById('windows');
	var back = document.getElementById('back');
	click();
}
function click() {
	four.onclick = function show() {
		windows.style.display = "block";
	}
}

