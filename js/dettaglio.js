import { caricaTutte } from './dati.js';
import { classeVoto, badgeCanale } from './ui.js';
import { creaBozza } from './bozze.js';
import { segnaInviata } from './stato.js';

function impostaBottone(bottone, icona, testo) {
	bottone.innerHTML = `<i data-lucide="${icona}"></i> <span>${testo}</span>`;
	lucide.createIcons();
}

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
			<p>${recensione.struttura} · ${badgeCanale(recensione.canale)} · ${
		recensione.codicePrenotazione
	} · ${recensione.data}</p>
		</header>
		<span class="badge ${classeVoto(recensione.voto)}">${recensione.voto}/10</span>
		<p>${recensione.testo}</p>
		<label for="bozza">Bozza di risposta:</label>
		<textarea id="bozza" rows="10">${creaBozza(recensione)}</textarea>
		<button id="copia-btn">
		<i data-lucide="copy"></i>
		Copia bozza
		</button> ${
			recensione.haRisposta
				? '<p class="icona-ok"><i data-lucide="circle-check"></i> Risposta già inviata</p>'
				: `<button id="inviata-btn" class="secondary">
						<i data-lucide="send"></i>
						<span>Segna come inviata</span>
				   </button>`
		}
		`;

	lucide.createIcons();

	const bottoneCopia = document.querySelector('#copia-btn');

	bottoneCopia.addEventListener('click', async () => {
		const testo = document.querySelector('#bozza').value;

		try {
			await navigator.clipboard.writeText(testo);
			impostaBottone(bottoneCopia, 'check', 'Copiato!');
			bottoneCopia.classList.add('copiato');
		} catch (errore) {
			impostaBottone(bottoneCopia, 'x', 'Copia non riuscita');
		}

		setTimeout(() => {
			impostaBottone(bottoneCopia, 'copy', 'Copia bozza');
			bottoneCopia.classList.remove('copiato');
		}, 2000);
	});

	const bottoneInviata = document.querySelector('#inviata-btn');

	if (bottoneInviata) {
		bottoneInviata.addEventListener('click', () => {
			segnaInviata(recensione.id);
			window.location.href = 'index.html';
		});
	}
}

avvia();
