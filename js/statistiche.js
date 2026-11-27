export function calcolaMedia(lista) {
	if (lista.length === 0) return 0;

	const somma = lista.reduce((totale, r) => totale + r.voto, 0);

	return somma / lista.length;
}

export function contaInAttesa(lista) {
	return lista.filter((r) => !r.haRisposta).length;
}

export function mediaCanale(lista, canale) {
	const delCanale = lista.filter((r) => r.canale === canale);
	return calcolaMedia(delCanale);
}
