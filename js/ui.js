export const NOMI_CANALI = {
	airbnb: 'Airbnb',
	booking: 'Booking.com',
};

function classeVoto(voto) {
	if (voto <= 4) return 'voto-basso'; // rosso
	if (voto <= 7) return 'voto-medio'; // giallo
	return 'voto-alto'; // verde
}

export function badgeCanale(canale) {
	return `<span class="badge canale-${canale}">${NOMI_CANALI[canale]}</span>`;
}

export function badgeVoto(r) {
	return `<span class="badge ${classeVoto(r.voto)}">${r.votoOriginale}/${
		r.scalaOriginale
	}</span>`;
}
