import { caricaTutte } from './dati.js';
import { classeVoto } from './ui.js';

async function avvia() {
	const parametri = new URLSearchParams(window.location.search);
	const id = parametri.get('id');

	const recensioni = await caricaTutte();
	const recensione = recensioni.find((r) => r.id === id);

	const contenitore = document.querySelector('#dettaglio');

	if (!recensione) {
		contenitore.innerHTML = '<p>Recensione non trovata.</p>';
		return;
	}

	contenitore.innerHTML = `
		<header>
			<h2>${recensione.ospite}</h2>
			<p>${recensione.struttura} · ${recensione.canale} · ${
		recensione.codicePrenotazione
	} · ${recensione.data}</p>
		</header>
		<span class="badge ${classeVoto(recensione.voto)}">${recensione.voto}/10</span>
		<p>${recensione.testo}</p>
	`;
}

avvia();
