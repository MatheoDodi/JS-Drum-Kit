console.log("Hello World");

window.addEventListener('keydown', function(event) {
	let keyCode = event.keyCode;
	let audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	let box = document.querySelector(`div[data-key="${keyCode}"]`);
	audio.currentTime = 0
	audio.play();
	box.classList.add('playing');
	setTimeout(function() {
	  box.classList.remove('playing');
	}, 80);
}) 



function touch(code) {
	document.querySelector(`div[data-key="${code}"]`).addEventListener('click', function() {
	audio = document.querySelector(`audio[data-key="${code}"]`);
	box = this;
	audio.currentTime = 0
	audio.play();
	box.classList.add('playing');
	setTimeout(function() {
	  box.classList.remove('playing');
	}, 80);
})
}

touch(65);
touch(83);
touch(68);
touch(70);
touch(71);
touch(72);
touch(72);
touch(74);
touch(75);
touch(76);