const frog = document.querySelector('div.frog');
const viewer = document.querySelector('p#coin-viewer');
let frogBusy = false;
let coin_counter = 0;
let coin_price = 0.01; // dollars

frog.onclick = () => {
    if (frogBusy) return;
    frogBusy = true;
    frog.style.transform = 'rotate(360deg)';
    new Audio('assets/coin.wav').play();
    coin_counter++;
    viewer.innerText = `Ribbit Coins: ${coin_counter}`;
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

const withdraw = () => alert(`Failed to withdraw: you need at least ${coin_counter<40?40:coin_counter+1} ribbit coins`);
