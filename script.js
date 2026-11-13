async function caricaRecensioni(percorso) {
	const risposta = await fetch(percorso);
	const recensioni = await risposta.json();
	return recensioni;
}

async function avvia() {
	const airbnb = await caricaRecensioni('data/airbnb.json');
	const booking = await caricaRecensioni('data/booking.json');

	console.log(airbnb);
	console.log(booking);
}

avvia();
