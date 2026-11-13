async function caricaAirbnb() {
	const risposta = await fetch('data/airbnb.json');
	const recensioni = await risposta.json();
	console.log(recensioni);
}

async function caricaBooking() {
	const risposta = await fetch('data/booking.json');
	const recensioni = await risposta.json();
	console.log(recensioni);
}

caricaAirbnb();
caricaBooking();
