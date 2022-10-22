let spookerEl = document.getElementById("spooker");
let spookMoreEl = document.getElementById("more");

let spooks = [
	"Ammerican politics.",
	"Infalation.",
	"UK politics.",
	"Global warming.",
	"Ocean temperature.",
	"Energy prices.",
	"Solar flares.",
	"Ghosts.",
	"Ghouls?",
	"Nuclear threts.",
	"Boo."
];

let current;
let newspook;

function spook(){
	while (newspook == current) {newspook = Math.floor(Math.random()*spooks.length);}
	spookerEl.innerHTML = spooks[newspook];
	current = newspook;
}
spookMoreEl.addEventListener("click", spook);
spook()