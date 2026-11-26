const NOMI_CANALI = {
	airbnb: 'Airbnb',
	booking: 'Booking.com',
};

export function classeVoto(voto) {
	if (voto <= 4) return 'voto-basso'; // rosso
	if (voto <= 7) return 'voto-medio'; // giallo
	return 'voto-alto'; // verde
}

export function badgeCanale(canale) {
	return `<span class="badge canale-${canale}">${NOMI_CANALI[canale]}</span>`;
}
