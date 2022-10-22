let spookerEl = document.getElementById("spooker");
let spookMoreEl = document.getElementById("more");

let spooks = [
	"American politics.",
	"Inflation.",
	"UK politics.",
	"Global warming.",
	"Ocean temperatures.",
	"Energy prices.",
	"Solar flares.",
	"Ghosts.",
	"Ghouls?",
	"nuclear threats.",
	"<a href=\"https://youtu.be/-1dSY6ZuXEY\">Skeletons.</a>",
	"<a href=\"https://youtu.be/dQw4w9WgXcQ\">The internet.</a>",
	"The spanish inquisition (not expected)",
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