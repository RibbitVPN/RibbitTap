const frog = document.querySelector('div.frog');
let frogBusy = false;

frog.onclick = () => {
    if (frogBusy) return;
    frogBusy = true;
    frog.style.transform = 'rotate(360deg)';
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
