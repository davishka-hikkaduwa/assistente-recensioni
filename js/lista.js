import { caricaTutte } from './dati.js';

// ===== Stato della pagina =====

let recensioni = [];

// ===== Visualizzazione nella tabella =====

function classeVoto(voto) {
	if (voto <= 4) return 'voto-basso'; // rosso
	if (voto <= 7) return 'voto-medio'; // giallo
	return 'voto-alto'; // verde
}

function mostraRecensioni(lista) {
	const tbody = document.querySelector('#review-table-body');

	const righe = lista.map(
		(r) => `
		<tr>
			<td>${r.data}</td>
			<td><span class="badge canale-${r.canale}">${r.canale}</span></td>
			<td class="codice">${r.codicePrenotazione}</td>
			<td>${r.struttura}</td>
			<td>${r.ospite}</td>
			<td><span class="badge ${classeVoto(r.voto)}">${r.voto}/10</span></td>
			<td class="testo">${r.testo}</td>
			<td>${
				r.haRisposta
					? '<i data-lucide="circle-check" class="icona-ok"></i>'
					: '<i data-lucide="clock" class="icona-attesa"></i>'
			}</td>
		</tr>`
	);

	tbody.innerHTML = righe.join('');
	lucide.createIcons();
}

// ===== Filtri =====

function aggiornaTabella() {
	const soloUrgenti = document.querySelector('#filtro-urgenti').checked;
	const soloSenzaRisposta = document.querySelector(
		'#filtro-senza-risposta'
	).checked;
	const canaleSelezionato = document.querySelector('#filtro-canale').value;

	let daMostrare = recensioni;

	if (soloUrgenti) {
		daMostrare = daMostrare.filter((r) => r.voto <= 4);
	}

	if (soloSenzaRisposta) {
		daMostrare = daMostrare.filter((r) => !r.haRisposta);
	}

	if (canaleSelezionato !== 'tutti') {
		daMostrare = daMostrare.filter((r) => r.canale === canaleSelezionato);
	}

	mostraRecensioni(daMostrare);
}

// ===== Avvio =====

async function avvia() {
	recensioni = await caricaTutte();
	aggiornaTabella();
}

document.querySelector('#sync-btn').addEventListener('click', avvia);
document
	.querySelector('#filtro-urgenti')
	.addEventListener('change', aggiornaTabella);
document
	.querySelector('#filtro-senza-risposta')
	.addEventListener('change', aggiornaTabella);
document
	.querySelector('#filtro-canale')
	.addEventListener('change', aggiornaTabella);

lucide.createIcons();
