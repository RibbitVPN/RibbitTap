const frog = document.querySelector('div.frog');
const viewer = document.getElementById('coin-viewer');
let frogBusy = false;
let coin_counter = 0;
let coin_price = 0.01; // dollars

frog.onclick = () => {
    if (frogBusy) return;
    frogBusy = true;
    frog.style.transform = 'rotate(360deg)';
    new Audio('assets/coin.wav').play();
	coin_counter++;
	viewer.innerHTML = "Ribbit Coins: "+ coin_counter;
    setTimeout(_ => {
	frog.classList.remove('transition');
	requestAnimationFrame(_ => {
	    frog.style = '';
	    requestAnimationFrame(_ => {
		frog.classList.add('transition');
		frogBusy = false;
	    });
	});
    }, 450);
};

function withdraw() {
	if (coin_counter <= 40) {
		alert("Can't withdraw need atleast 40 coins");
	} else {
		let amount = coin_counter * coin_price;
		coin_counter = 0;
		alert("You successfully withdrawed: " + amount + " USD");
	}
}
