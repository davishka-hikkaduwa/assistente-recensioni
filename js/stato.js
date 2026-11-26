const CHIAVE = 'risposteInviate';

export function leggiInviate() {
	const salvato = localStorage.getItem(CHIAVE);
	if (salvato === null) return [];
	return JSON.parse(salvato);
}

export function segnaInviata(id) {
	const inviate = leggiInviate();

	if (!inviate.includes(id)) {
		inviate.push(id);
	}

	localStorage.setItem(CHIAVE, JSON.stringify(inviate));
}
