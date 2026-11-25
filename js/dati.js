// ===== Caricamento =====

async function caricaRecensioni(percorso) {
	const risposta = await fetch(percorso);
	const dati = await risposta.json();
	return dati;
}

// ===== Normalizzazione: ogni canale -> formato comune =====

function normalizzaAirbnb(r) {
	return {
		id: r.id,
		canale: 'airbnb',
		codicePrenotazione: r.confirmationCode,
		struttura: r.listingName,
		ospite: r.guestName,
		voto: r.rating * 2, // Airbnb: scala 1-5 -> 1-10
		testo: r.comment,
		data: r.createdAt,
		lingua: r.language,
		haRisposta: r.hostResponse !== null,
	};
}

function normalizzaBooking(r) {
	return {
		id: r.id,
		canale: 'booking',
		codicePrenotazione: r.reservationNumber,
		struttura: r.propertyName,
		ospite: r.reviewerName,
		voto: r.score, // Booking.com: già su scala 1-10
		testo: [r.positive, r.negative].filter((t) => t !== '').join(' / '),
		data: r.reviewDate,
		lingua: r.language,
		haRisposta: r.replied,
	};
}

// ===== Funzione pubblica: l'unica usata dalle pagine =====

export async function caricaTutte() {
	const airbnb = (await caricaRecensioni('data/airbnb.json')).map(
		normalizzaAirbnb
	);
	const booking = (await caricaRecensioni('data/booking.json')).map(
		normalizzaBooking
	);

	return [...airbnb, ...booking];
}
